import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import {CountComponent} from './component/count/count.component';
import {DetailComponent} from './component/detail/detail.component';
import {HttpClientModule} from '@angular/common/http';


// module configuration
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    CountComponent,
    DetailComponent
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { 
 
}
