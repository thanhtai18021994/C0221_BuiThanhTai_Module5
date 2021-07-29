import { Injectable } from '@angular/core';
import {ProductClass} from '../model/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  public products: ProductClass[] = [
    {
      id:1,
      name:"Iphone 7",
      price: 200,
      description: "90%"
    },
    {
      id:2,
      name:"Iphone X",
      price: 1000,
      description: "90%"
    },
    {
      id:3,
      name:"Iphone 6S",
      price: 100,
      description: "90%"
    },
    {
      id:4,
      name:"Iphone7 plus",
      price: 300,
      description: "90%"
    }
  ]
  constructor() { }

  findAll(){
    return this.products;
  }

  findById(id: number){
    let result=null;
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id===id){
        result=this.products[i]
        break;
      }
    }
    return result;
  }

  save(product: ProductClass){
    let check=false;
    let index=0;
    for (let i = 0; i <this.products.length ; i++) {
      if (this.products[i].id===product.id){
        check=true;
        index=i;
        break;
      }
    }
    if (check){
      this.products[index]=product
    }else {
      this.products.push(product)
    }
  }

  delete(id:number){
    console.log('this ís id:'+id);
    for (let i = 0; i <this.products.length ; i++) {
      if(id===this.products[i].id){
        this.products.splice(i,1);
        break;
      }
    }
  }
}
