import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {approutes} from './app.routes';
import {ProductService} from './product.service';
import { ProductDetaiComponent } from './product-detai/product-detai.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetaiComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(approutes)
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
