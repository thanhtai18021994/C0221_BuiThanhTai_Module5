import { Component, OnInit } from '@angular/core';
import {ProductClass} from '../model/product.class';
import {ActivatedRoute} from '@angular/router';
import {ProductServiceService} from '../service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductClass[]=[];
  constructor(private productService: ProductServiceService,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    this.products=this.productService.findAll()
  }

  delete(id: number){
    this.productService.delete(id);
  }

}
