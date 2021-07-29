import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProducServiceService} from '../service/produc-service.service';
import {ProductClass} from '../model/product.class';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  product: ProductClass=null;
  constructor(
    private fb: FormBuilder,
    private productService: ProducServiceService
  ) { }

  ngOnInit(): void {
    this.create()
  }

  create(){
    this.productForm=this.fb.group({
      name:['',[Validators.required, Validators.minLength(6)]],
      price:['',Validators.required],
      description:['',Validators.required]
    })
  }

  onSubmit(){
    const product=new ProductClass(this.productService.findAll().length+1,this.productForm.value.name,this.productForm.value.price,this.productForm.value.description);
    this.productService.save(product);
  }
}
