import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enum' })
export class EnumPipe implements PipeTransform {
  transform(value): any {
    return Object.keys(value).filter(k => isNaN(Number(k)));
  }
}
