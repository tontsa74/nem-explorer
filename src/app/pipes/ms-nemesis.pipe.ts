import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transform NEM timeStamp to UTC millis
 */
@Pipe({
  name: 'msNemesis'
})
export class MsNemesisPipe implements PipeTransform {

  /**
   * @param value NEM timeStamp
   */
  transform(value: number): number {
    /**
     * UTC millis of first nemesis block
     */
    const nemesis = 1427587585000;
    if (value >= 0) {
      return value * 1000 + nemesis;
    } else {
      return value;
    }
  }
}
