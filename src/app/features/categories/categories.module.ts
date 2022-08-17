import { CategoryListComponent } from './components/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchCategoryFilterPipe } from './pipes/search-category-filter/search-category-filter.pipe';

@NgModule({
  declarations: [CategoryListComponent, SearchCategoryFilterPipe],
  imports: [CommonModule, CategoriesRoutingModule, FormsModule],
  exports: [CategoryListComponent],
})
export class CategoriesModule {}
