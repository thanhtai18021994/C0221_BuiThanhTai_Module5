import {Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetaiComponent} from './product-detai/product-detai.component';

export const approutes: Routes=[
  {
    path: 'product',
    component: ProductsComponent
  },{
  path: 'product/:id',
    component: ProductDetaiComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]
