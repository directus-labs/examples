import directus from 'lib/directus';
import { notFound } from 'next/navigation';
import { readItem } from '@directus/sdk';

async function getPage(slug) {
  try {
    const page = await directus.request(readItem('pages', slug));
    return page;
  } catch (error) {
    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const page = await getPage(params.slug);
  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
    </div>
  );
}
