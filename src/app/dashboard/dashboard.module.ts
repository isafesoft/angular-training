import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

// module configuration
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { 
 
}
