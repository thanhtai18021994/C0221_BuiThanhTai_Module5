import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  product=[
    {
    id:1,
    name:'PRODUCT ITEM NUMBER 1',
    description:'Description for product item number 1',
    thumbnail:'https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg',
    price:5.99,
    quantity:1
    },
    {
      id:2,
    name:'PRODUCT ITEM NUMBER 2',
    description:'Description for product item number 2',
    thumbnail:'https://img.global.news.samsung.com/vn/wp-content/uploads/2019/03/Galaxy-A50-Mat-truoc-3.jpg',
    price:1,
    quantity:1
    },
   {
    id:3, name:'PRODUCT ITEM NUMBER 2',
  description:'Description for product item number 2',
  thumbnail:'https://img.global.news.samsung.com/vn/wp-content/uploads/2019/03/Galaxy-A50-Mat-truoc-3.jpg',
  price:1,
  quantity:1
}]
  constructor() { }

  ngOnInit(): void {
  }
  remove(param:number):void{
    const index=this.product.findIndex((item)=>item.id==param);
    this.product.splice(index,1)
  }

}
