import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'euroSymbol'
})
export class EuroSymbolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + '€';
  }


}
