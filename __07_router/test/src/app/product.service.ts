import { Injectable } from '@angular/core';
import {ProductClass} from './model/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: ProductClass[] = [
    {
      id: 1,
      name: "IP 7",
      price: 200,
      status: false
    },
    {
      id: 2,
      name: "IP 6",
      price: 100,
      status: true
    },
    {
      id: 3,
      name: "IP-X",
      price: 500,
      status: true
    }
  ]
  constructor() { }
  getAllProduct(){
    return this.products;
  }
  getProductId(id: number){
    let result=null;
    for (let i = 0; i <this.products.length ; i++) {
      if (this.products[i].id===id){
        result=this.products[i];
        break;
      }
    }
    return result;
  }

}
