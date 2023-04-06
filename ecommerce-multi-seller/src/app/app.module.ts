import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CategorysComponent } from './components/categorys/categorys.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategorysComponent,
    SubCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
