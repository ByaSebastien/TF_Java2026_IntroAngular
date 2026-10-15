import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  transform(value: number, symbol: string = '€'): string {
    return (value / 100).toFixed(2) + symbol;
  }
}
