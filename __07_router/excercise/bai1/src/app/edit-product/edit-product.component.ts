import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductClass} from '../model/product.class';
import {ProducServiceService} from '../service/produc-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup;
  product: ProductClass;
  constructor(
    private activatedRouter: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProducServiceService
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
    this.productService.save(product);
  }
}
