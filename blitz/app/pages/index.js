import Hero from "app/components/Hero"
import Article from "app/components/Article"
import { getDirectusClient } from "app/services/directus"
import { formatRelativeTime } from "app/utils/format-relative-time"

const Home = ({ hero, articles }) => {
  return (
    <main>
      <section className="main-content">
        <div className="container">
          <Hero article={hero} />
          <div className="articles-grid">
            {articles?.map((article, index) => (
              <Article key={index} article={article} bordered={index !== articles.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

Home.suppressFirstRenderFlicker = true
export default Home

export async function getStaticProps() {
  const directus = await getDirectusClient()
  const response = await directus.items("articles").readByQuery({
    fields: ["*", "author.avatar", "author.first_name", "author.last_name"],
    sort: ["-publish_date"],
  })

  if (!response.data) {
    return {
      notFound: true,
    }
  }

  const formattedArticles = response.data.map((article) => {
    return {
      ...article,
      publish_date: formatRelativeTime(new Date(article.publish_date)),
    }
  })
  const [hero, ...articles] = formattedArticles

  return {
    props: {
      hero,
      articles,
    },
  }
}
