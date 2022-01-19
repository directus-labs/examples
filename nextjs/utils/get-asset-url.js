import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { url } = publicRuntimeConfig;

export function getAssetURL(id) {
  if (!id) return null;
  return `${url}/assets/${id}`;
}
