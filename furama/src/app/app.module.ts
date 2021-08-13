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
import {EmployeeComponent} from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
import {ContractComponent} from './contract/contract.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {ViewContractComponent} from './contract/view-contract/view-contract.component';
import {UpdateContractComponent} from './contract/update-contract/update-contract.component';
import {FinalComponent} from './final/final.component';
import {ListComponent} from './final/list/list.component';
import { UpdateComponent } from './final/update/update.component';

const routing: Routes = [
  {
    path: 'final/list',
    component: ListComponent
  }, {
    path: 'final/update/:id',
    component: UpdateComponent
  },
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
    component: EmployeeComponent,
    children: [
      {
        path: '',
        component: ListEmployeeComponent,
        outlet: 'employee'
      },
      {
        path: 'create',
        component: CreateEmployeeComponent,
        outlet: 'employee'
      }, {
        path: 'update/:id',
        component: UpdateEmployeeComponent,
        outlet: 'employee'
      }, {
        path: 'view/:id',
        component: ViewEmployeeComponent,
        outlet: 'employee'
      }
    ]
  }, {
    path: 'contract',
    component: ContractComponent,
    children: [
      {
        path: '',
        component: ListContractComponent,
        outlet: 'contract'
      },
      {
        path: 'create',
        component: CreateContractComponent,
        outlet: 'contract'
      },
      {
        path: 'view/:id',
        component: ViewContractComponent,
        outlet: 'contract'
      }, {
        path: 'update/:id',
        component: UpdateContractComponent,
        outlet: 'contract'
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
    EmployeeComponent,
    ContractComponent,
    ListContractComponent,
    CreateContractComponent,
    ViewContractComponent,
    UpdateContractComponent,
    FinalComponent,
    ListComponent,
    UpdateComponent
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
