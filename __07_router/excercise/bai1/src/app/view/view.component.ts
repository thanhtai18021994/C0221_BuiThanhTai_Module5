import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductClass} from '../model/product.class';
import {ProducServiceService} from '../service/produc-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  product: ProductClass=null;
  constructor(
    public activatedRouter: ActivatedRoute,
    public productService: ProducServiceService
  ) { }

  ngOnInit(): void {
    this.view()
  }

  view(){
    let id=Number(this.activatedRouter.snapshot.params['id']);
    console.log(id);
    this.product=this.productService.findById(id);
  }
}
