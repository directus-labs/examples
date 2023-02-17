import { Directus } from '@directus/sdk';
import {
	SECRET_DIRECTUS_TOKEN,
	SECRET_DIRECTUS_EMAIL,
	SECRET_DIRECTUS_PASSWORD
} from '$env/static/private';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

const directus = new Directus(PUBLIC_DIRECTUS_URL);

async function getDirectusClient() {
	if (directus.auth.token) return directus;

	try {
		if (SECRET_DIRECTUS_EMAIL && SECRET_DIRECTUS_PASSWORD) {
			await directus.auth.login({
				email: SECRET_DIRECTUS_EMAIL,
				password: SECRET_DIRECTUS_PASSWORD
			});
		} else if (SECRET_DIRECTUS_TOKEN) {
			await directus.auth.static(SECRET_DIRECTUS_TOKEN);
		}
	} catch (err) {
		if (err.parent.code === 'ECONNREFUSED') {
			console.error(
				'Unable to connect to the Directus instance. Make sure the .env file is present and the PUBLIC_DIRECTUS_URL variable is pointing the correct URL.'
			);
		}
	}

	return directus;
}

export { getDirectusClient };
