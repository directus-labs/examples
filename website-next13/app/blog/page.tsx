import directus from "lib/directus"

async function getPosts() {
  const posts = await directus.items('posts').readByQuery({
    fields: ['slug', 'title', 'publish_date', 'author.name'],
    sort: ['-publish_date']
  })
  return posts.data
}

export default async function DynamicPage() {
  const posts = await getPosts()
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
              </a>
              <span>{post.publish_date} &bull; {post.author.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}