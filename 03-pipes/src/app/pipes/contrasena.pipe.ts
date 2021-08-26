import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    let resp = value;
    if (activar) {
      resp = "*".repeat(value.length);
    }
    return resp;
  }

}
