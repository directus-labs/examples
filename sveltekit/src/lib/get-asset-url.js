export function getAssetURL(id) {
	if (!id) return null;
	return `${import.meta.env.VITE_DIRECTUS_URL}/assets/${id}`;
}
