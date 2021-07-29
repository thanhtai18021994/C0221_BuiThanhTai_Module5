import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TimelinesComponent } from './timelines/timelines.component';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
