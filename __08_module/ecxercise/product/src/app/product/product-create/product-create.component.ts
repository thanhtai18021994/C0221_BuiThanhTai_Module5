import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../service/product-service.service';
import {ProductClass} from '../model/product.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductServiceService
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
