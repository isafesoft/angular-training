import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import {CountComponent} from './component/count/count.component';
import {DetailComponent} from './component/detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardViewerComponent } from './containers/dashboard-viewer/dashboard-viewer.component';
import { PassengerFormComponent } from './component/passenger-form/passenger-form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'passengers',
    component: DashboardComponent
  }
]

// module configuration
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent,
    CountComponent,
    DetailComponent,
    DashboardViewerComponent,
    PassengerFormComponent
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { 
 
}
