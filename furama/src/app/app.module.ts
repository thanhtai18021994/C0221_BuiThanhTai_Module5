import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customer/customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {ViewEmployeeComponent} from './employee/view-employee/view-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routing: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'employee',
    component:EmployeeComponent,
    children: [
      {
        path: '',
        component:ListEmployeeComponent,
        outlet:'employee'
      },
      {
        path: 'create',
        component: CreateEmployeeComponent,
        outlet:'employee'
      }, {
        path: 'update:/id',
        component: UpdateEmployeeComponent,
        outlet:'employee'
      }, {
        path: 'view',
        component: ViewEmployeeComponent,
        outlet:'employee'
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routing),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
