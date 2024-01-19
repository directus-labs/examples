import { createDirectus } from '@directus/sdk';
import { rest, readItem, readItems } from '@directus/sdk';
const directus = createDirectus('https://CHANGE-THIS.directus.app').with(
  rest()
);

export default defineNuxtPlugin(() => {
  return {
    provide: { directus, readItem, readItems },
  };
});
