import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ProductClass} from '../model/product.class';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: ProductClass[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.getAllProduct();
  }

}
