import directus from "lib/directus";

async function getGlobals() {
  const { data } = await directus.items('global').readByQuery()
  return data
}

export default async function HomePage() {
  const global = await getGlobals()
  return (
    <div>
      <h1>{global.title}</h1>
      <p>{global.description}</p>
    </div>
  )
}
