import { ProductsModule } from './../features/products/products.module';
import { CategoriesModule } from './../features/categories/categories.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [NavbarComponent, HomepageComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CategoriesModule,
    ProductsModule,
  ],
  exports: [NavbarComponent],
})
export class SharedModule {}
