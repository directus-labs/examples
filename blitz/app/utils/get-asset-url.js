export function getAssetURL(id) {
  if (!id) return null
  return `${process.env.DIRECTUS_URL}/assets/${id}`
}
