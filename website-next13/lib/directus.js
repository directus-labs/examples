import { createDirectus } from '@directus/sdk';
import { rest } from '@directus/sdk';

const directus = createDirectus('http://localhost:8080/admin/').with(rest());

export default directus;
