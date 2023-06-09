import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductListComponent} from "./product/component/product-list/product-list.component";
import {ProductService} from "./product/service/product.service";
import { CategoryComponent } from './product/component/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
