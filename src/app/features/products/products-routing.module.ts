import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/auth/guards/login.guard';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: 'add-product',
    component: ProductComponent,
    pathMatch: 'full',
    canActivate: [LoginGuard],
  },
  {
    path: 'products/:id',
    component: ProductComponent,
    pathMatch: 'full',
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
