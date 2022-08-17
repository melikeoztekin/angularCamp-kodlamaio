import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CategoriesModule } from './features/categories/categories.module';
import { CustomersModule } from './features/customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { StorageModule } from './core/storage/storage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CoreModule,
    SharedModule,
    CategoriesModule,
    CustomersModule,
    StorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
