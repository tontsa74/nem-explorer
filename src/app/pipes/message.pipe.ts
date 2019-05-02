import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../interfaces/Transaction';

@Pipe({
  name: 'message'
})
export class MessagePipe implements PipeTransform {

  transform(message: Message): string {
    let result = '';
    switch (message.type) {
      case 1: {
        for (let n = 0; n < message.payload.length; n += 2) {
          result += String.fromCharCode(parseInt(message.payload.substr(n, 2), 16));
        }
        break;
      }
      case 2: {
        result = '<<encrypted>>';
        break;
      }
    }
    return result;
  }

}
