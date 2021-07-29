import { Component, OnInit } from '@angular/core';
import {ProducServiceService} from '../service/produc-service.service';
import {ProductClass} from '../model/product.class';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: ProductClass[]=[];
  constructor(private productService: ProducServiceService,
              private activatedRouter: ActivatedRoute) {
    console.log();
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
