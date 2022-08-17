import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/features/customers/models/customer';

@Pipe({
  name: 'searchCustomerFilter',
})
export class SearchCustomerFilterPipe implements PipeTransform {
  transform(value: Customer[], filterText: string): Customer[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (cs: Customer) =>
            cs.companyName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
