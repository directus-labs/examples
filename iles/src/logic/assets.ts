export function getAssetURL (id: string) {
  if (!id) return ''
  return `${import.meta.env.VITE_DIRECTUS_URL}/assets/${id}`
}
