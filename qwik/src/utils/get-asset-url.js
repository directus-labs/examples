export function getAssetURL(id) {
  if (!id) return null;
  return `${import.meta.env.PUBLIC_QWIK_APP_DIRECTUS_URL}/assets/${id}`;
}
