import directus from "lib/directus"
import { notFound } from "next/navigation"

async function getPost(slug) {
  try {
    const post = await directus.items('posts').readOne(slug, {
      fields: ['*.*']
    })
    return post
  } catch(error) {
    notFound()
  }
}

export default async function DynamicPage({ params }) {
  const post = await getPost(params.slug)
  return (
    <>
      <img src={`${directus.url}assets/${post.image.filename_disk}?width=600`} alt="" />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </>
  )
}
