import { Directus } from '@directus/sdk';
import { environment } from '../../environments/environment';

export const directus = new Directus<Record<string, any>>(
  environment.directusBaseUrl
);
