// This is the starting point of directus sdk setup.
import { Directus } from '@directus/sdk';

const directus = new Directus(process.env.DIRECTUS_API);

// Export the directus instance to use it in the components or stores
// Check src/store/auth to see an example
export { directus }
