import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

export function getAssetURL(id) {
	if (!id) return null;
	return `${PUBLIC_DIRECTUS_URL}/assets/${id}`;
}
