import { environment } from 'src/environments/environment';

export function getAssetURL(id: any) {
  if (!id) return null;
  return `${environment.directusBaseUrl}/assets/${id}`;
}
