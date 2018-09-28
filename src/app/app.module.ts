import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PassengersService} from './services/passengers.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    // custom modules
    DashboardModule
  ],
  providers: [
    PassengersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
