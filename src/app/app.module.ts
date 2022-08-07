import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { SaleDirective } from './directives/sale/sale.directive';
import { SearchCustomerFilterPipe } from './pipes/search-customer-filter/search-customer-filter.pipe';
import { SearchProductFilterPipe } from './pipes/search-product-filter/search-product-filter.pipe';
import { ClickCardDirective } from './directives/click-card/click-card.directive';
import { IfNotDirective } from './directives/if-not/if-not.directive';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchCategoryFilterPipe } from './pipes/search-category-filter/search-category-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryListComponent,
    CustomerCardComponent,
    CustomerListComponent,
    CustomerComponent,
    KdvPipe,
    SaleDirective,
    SearchProductFilterPipe,
    SearchCustomerFilterPipe,
    ClickCardDirective,
    IfNotDirective,
    MultipleDirective,
    WelcomeDirective,
    LoginPageComponent,
    SearchCategoryFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
