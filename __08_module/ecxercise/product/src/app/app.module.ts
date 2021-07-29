import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import {RouterModule} from '@angular/router';
import {ProductModule} from './product/product.module';
import {CategoryModule} from './category/category.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        ProductModule,
       CategoryModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
