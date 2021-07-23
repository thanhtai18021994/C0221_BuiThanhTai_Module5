import { Component } from '@angular/core';
import {ProductModel} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: ProductModel[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg',
      price: 5.99,
      quantity: 3
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://img.global.news.samsung.com/vn/wp-content/uploads/2019/03/Galaxy-A50-Mat-truoc-3.jpg',
      price: 1,
      quantity: 2
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://img.global.news.samsung.com/vn/wp-content/uploads/2019/03/Galaxy-A50-Mat-truoc-3.jpg',
      price: 1,
      quantity: 5
    }];
  numberItem: number=10;
  // priceItem: number;

  // remove(productId: string): void{
  //   const index = this.product.findIndex((item) => item.id === parseInt(productId));
  //   this.product.splice(index, 1);
  //   let quantity=0;
  //   let price=0;
  //   for (const item of this.product) {
  //     quantity+=item.quantity
  //   }
  //   this.numberItem=quantity;
  // }
  changeQuantity(para: string,id: number):void{

    console.log(para,id);
  }
}
