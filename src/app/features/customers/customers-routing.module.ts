import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './pages/customer/customer.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerListComponent,
    pathMatch: 'full',
  },
  {
    path: 'add-customer',
    component: CustomerComponent,
    pathMatch: 'full',
  },
  {
    path: 'customers/:id',
    component: CustomerComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
