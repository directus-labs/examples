import { Directus } from '@directus/sdk';
import { DIRECTUS_EMAIL, DIRECTUS_PASSWORD, DIRECTUS_STATIC_TOKEN } from '$env/static/private';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

const directus = new Directus(PUBLIC_DIRECTUS_URL);

async function getDirectusClient() {

	if (directus.auth.token) return directus;

	try {
		if (DIRECTUS_EMAIL && DIRECTUS_PASSWORD) {
			await directus.auth.login({
				email: DIRECTUS_EMAIL,
				password: DIRECTUS_PASSWORD
			});
		} else if (DIRECTUS_STATIC_TOKEN) {
			await directus.auth.static(DIRECTUS_STATIC_TOKEN);
		}
	} catch (err) {
		if (err.parent?.code === 'ECONNREFUSED') {
			console.error(
				'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
			);
		}
	}

	return directus;
}

export { getDirectusClient };
