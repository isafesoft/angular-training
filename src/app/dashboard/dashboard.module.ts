import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import {CountComponent} from './component/count/count.component';
import {DetailComponent} from './component/detail/detail.component';

// module configuration
@NgModule({
  imports: [
    CommonModule
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
