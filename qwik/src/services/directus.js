import { Directus } from "@directus/sdk";

// REACT_APP_DIRECTUS_URL=http://127.0.0.1:8055

export const directus = new Directus(import.meta.env.PUBLIC_QWIK_APP_DIRECTUS_URL);


// import { createDirectus } from '@directus/sdk';

// export const directus = createDirectus('http://127.0.0.1:8055');