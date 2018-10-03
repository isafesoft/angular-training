import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import {CountComponent} from './component/count/count.component';
import {DetailComponent} from './component/detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardViewerComponent } from './containers/dashboard-viewer/dashboard-viewer.component';


// module configuration
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    CountComponent,
    DetailComponent,
    DashboardViewerComponent
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { 
 
}
