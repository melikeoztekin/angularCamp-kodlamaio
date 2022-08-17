import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { SearchCustomerFilterPipe } from './pipes/search-customer-filter/search-customer-filter.pipe';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerCardComponent,
    CustomerListComponent,
    SearchCustomerFilterPipe,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CustomerListComponent],
})
export class CustomersModule {}
