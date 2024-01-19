import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('http://localhost:8080/').with(rest());

export default directus;
