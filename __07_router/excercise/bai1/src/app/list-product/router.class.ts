import {Routes} from '@angular/router';
import {ListProductComponent} from './list-product.component';
import {CreateProductComponent} from '../create-product/create-product.component';
import {ViewComponent} from '../view/view.component';
import {EditProductComponent} from '../edit-product/edit-product.component';

export const routerClass: Routes = [
  {
    path:"",
    component: ListProductComponent
  },
  {
    path:"create",
    component:CreateProductComponent
  },
  {
    path:"edit/:id",
    component:EditProductComponent
  },
  {
  path:"view/:id",
    component: ViewComponent
  },
  {
    path:"delete/:id",
    component: ListProductComponent
  }
]
