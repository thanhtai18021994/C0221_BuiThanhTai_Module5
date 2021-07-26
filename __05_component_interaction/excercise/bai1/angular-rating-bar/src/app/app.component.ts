import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quantity = 0;
  size = 0;
  title = 'angular-rating-bar';
  take(value){
    this.size = value;
  }
  evaluate(value){
    this.quantity = value;
  }
}
