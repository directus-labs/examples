import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'getAssetUrl',
})
export class GetAssetUrlPipe implements PipeTransform {
  transform(id: string, ...args: unknown[]): string | null {
    if (!id) return null;
    return `${environment.directusBaseUrl}/assets/${id}`;
  }
}
