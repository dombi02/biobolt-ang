import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUpperCase'
})
export class UpperCase implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
