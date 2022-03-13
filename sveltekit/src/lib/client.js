import { Directus } from '@directus/sdk';
import 'dotenv/config';

const directus = new Directus(process.env.VITE_DIRECTUS_URL);

async function getDirectusClient() {
	if (directus.auth.token) return directus;

	try {
		if (process.env.DIRECTUS_EMAIL && process.env.DIRECTUS_PASSWORD) {
			await directus.auth.login({
				email: process.env.DIRECTUS_EMAIL,
				password: process.env.DIRECTUS_PASSWORD
			});
		} else if (process.env.DIRECTUS_STATIC_TOKEN) {
			await directus.auth.static(process.env.DIRECTUS_STATIC_TOKEN);
		}
	} catch (err) {
		if (err.parent.code === 'ECONNREFUSED') {
			console.error(
				'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
			);
		}
	}

	return directus;
}

export { getDirectusClient };
