import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/features/categories/models/category';

@Pipe({
  name: 'searchCategoryFilter',
})
export class SearchCategoryFilterPipe implements PipeTransform {
  transform(value: Category[], filterText: string): Category[] {
    filterText = filterText ? filterText.toLowerCase() : '';
    return filterText
      ? value.filter(
          (c: Category) => c.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
