import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ProductComponent } from './pages/product/product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CustomerComponent } from './pages/customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent, pathMatch: 'full' },
  { path: 'add-product', component: ProductComponent, pathMatch: 'full' },
  {
    path: 'categories/:id',
    component: HomepageComponent,
    pathMatch: 'full',
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
