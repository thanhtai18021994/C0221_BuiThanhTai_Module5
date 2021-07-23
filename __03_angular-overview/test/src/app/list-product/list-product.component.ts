import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() onRemove=new EventEmitter()
  @Output() onChange=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  remove(param: string): void{
    this.onRemove.emit(param);
  }

  changeQuantity(param: any,id: any):void{
    // @ts-ignore
    this.onChange.emit(param,id)
  }
}
