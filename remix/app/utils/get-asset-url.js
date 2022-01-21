const isClient = () => typeof window !== "undefined";

export function getAssetURL(id) {
  if (!id) return null;
  const baseURL = isClient() ? window.ENV.DIRECTUS_URL : process.env.DIRECTUS_URL;
  return `${baseURL}/assets/${id}`;
}
