import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { DictionaryDetailComponentComponent } from './dictionary-detail-component/dictionary-detail-component.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'view/:id',
    component: DictionaryDetailComponentComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DictionaryDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
