import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono',
})
export class ChronoPipe implements PipeTransform {
  transform(seconds: number): string {
    let hours = Math.floor(seconds / 3600);
    let minutes = seconds % 3600;
    minutes = Math.floor(minutes / 60);
    seconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
