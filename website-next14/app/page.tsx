import directus from '../lib/directus';
import { readItems } from '@directus/sdk';

async function getGlobals() {
  const { data } = await directus.request(readItems('global'));
  return data;
}

export default async function HomePage() {
  const global = await getGlobals();
  return (
    <div>
      <h1>{global.title}</h1>
      <p>{global.description}</p>
    </div>
  );
}
