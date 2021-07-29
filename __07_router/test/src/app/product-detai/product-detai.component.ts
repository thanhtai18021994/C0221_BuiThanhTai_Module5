import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductClass} from './model/product.class';
@Component({
  selector: 'app-product-detai',
  templateUrl: './product-detai.component.html',
  styleUrls: ['./product-detai.component.css']
})
export class ProductDetaiComponent implements OnInit {
  product: ProductClass;
  constructor(
    public ActivatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id=this.ActivatedRouter.params.subscribe(data=>{
      return data.id;
    })

  }

}
