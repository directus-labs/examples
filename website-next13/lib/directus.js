import { createDirectus } from '@directus/sdk';
import { rest } from '@directus/sdk/rest';

const directus = createDirectus('https://CHANGE-THIS.directus.app/').with(
  rest()
);

export default directus;
