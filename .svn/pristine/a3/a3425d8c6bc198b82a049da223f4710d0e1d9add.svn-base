import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getEnumName'
})
export class GetEnumNamePipe implements PipeTransform {

  transform(value: number, enumList: any): string {
    return enumList[value];
  }

}
