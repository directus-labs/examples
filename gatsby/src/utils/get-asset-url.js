export function getAssetURL(id) {
  if (!id) return null;
  return `${process.env.GATSBY_DIRECTUS_URL}/assets/${id}`;
}
