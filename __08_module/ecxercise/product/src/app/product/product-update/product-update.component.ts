import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ProductClass} from '../model/product.class';
import {ProductServiceService} from '../service/product-service.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  product: ProductClass;
  constructor(
    private activatedRouter: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductServiceService
  ) { }

  ngOnInit(): void {
    let id=+this.activatedRouter.snapshot.params['id']
    this.product=this.productService.findById(id);
    this.load()
    this.create()
  }

  load(){
    let id=+this.activatedRouter.snapshot.params['id'];
    this.product=this.productService.findById(id);
    console.log(this.product);
  }
  create(){
    this.productForm=this.fb.group({
      name:['',[Validators.required, Validators.minLength(6)]],
      price:['',Validators.required],
      description:['',Validators.required]
    })
  }

  onSubmit(){
    const product=new ProductClass(Number(this.activatedRouter.snapshot.params['id']),this.productForm.value.name,this.productForm.value.price,this.productForm.value.description);
    console.log(product);
    this.productService.save(product);
  }

}
