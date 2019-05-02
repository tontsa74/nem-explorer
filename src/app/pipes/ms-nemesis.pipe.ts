import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msNemesis'
})
export class MsNemesisPipe implements PipeTransform {

  transform(value: number): number {
    const nemesis = 1427587585000;
    if (value >= 0) {
      return value * 1000 + nemesis;
    } else {
      return value;
    }
  }
}
