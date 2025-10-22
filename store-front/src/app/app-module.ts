import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './components/product/product-list/product-list';
import { ProductForm } from './components/product/product-form/product-form';
import { ProductDetail } from './components/product/product-detail/product-detail';

@NgModule({
  declarations: [
    App,
    ProductList,
    ProductForm,
    ProductDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
