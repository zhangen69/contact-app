import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'getAudit'
})
export class GetAuditPipe extends DatePipe implements PipeTransform {

  transform(value: any): any {
    return `${value.updatedBy} ${super.transform(value.updatedDate, 'yyyy-MM-dd hh:mm a')} `;
  }

}
