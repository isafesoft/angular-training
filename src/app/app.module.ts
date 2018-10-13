import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PassengersService} from './services/passengers.service';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    RouterModule.forRoot(routes),
    // custom modules
    DashboardModule
  ],
  providers: [
    PassengersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
