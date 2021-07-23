import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CartSumaryComponent } from './cart-sumary/cart-sumary.component';
import { PromodoCodeComponent } from './promodo-code/promodo-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ListProductComponent,
    CartSumaryComponent,
    PromodoCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
