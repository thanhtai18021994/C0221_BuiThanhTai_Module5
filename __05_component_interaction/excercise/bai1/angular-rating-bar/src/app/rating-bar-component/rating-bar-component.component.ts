import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit, OnChanges {
  @Output() size = new EventEmitter();
  @Input() quantity: number;
  ratingUnit: IRatingUnit = {
    value: 1,
    active: [false, false, false, false, false, false, false, false, false, false]
};
  constructor() { }

  ngOnChanges(): void {
    this.ratingUnit.value = this.quantity;
    console.log(this.ratingUnit.value);
    this.takeValue(this.ratingUnit.value);
  }

  ngOnInit(): void {
  }
  takeValue(value){
    if (value > 10){
      value = 10;
    }
    this.ratingUnit.value = value;
    this.size.emit(value);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.ratingUnit.active.length ; i++) {
      this.ratingUnit.active[i] = false;
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.ratingUnit.value ; i++) {
      this.ratingUnit.active[i] = true;
    }
  }
}
