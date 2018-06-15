import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colour'
})
export class ColourPipe implements PipeTransform {

  transform(value: any, colour?: string): any {

    if (!colour) colour = '#793EEB';
    return `<b style="color:${colour}">${value}</b>`;
  }

}
