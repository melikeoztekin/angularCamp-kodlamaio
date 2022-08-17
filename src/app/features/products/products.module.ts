import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from 'src/app/core/core.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SaleDirective } from './directives/sale/sale.directive';
import { ClickCardDirective } from './directives/click-card/click-card.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { SearchProductFilterPipe } from './pipes/search-product-filter/search-product-filter.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCardComponent,
    ProductListComponent,
    SaleDirective,
    ClickCardDirective,
    KdvPipe,
    SearchProductFilterPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ProductListComponent],
})
export class ProductsModule {}
