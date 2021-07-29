import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from './product.service';
import {ProductClass} from './model/product.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';

  constructor(private urlRouter: Router) {
  }
  navigate(url: string){
    // this.urlRouter.navigate([url]);
    this.urlRouter.navigateByUrl(url);
  }

  ngOnInit(): void {

  }
}
