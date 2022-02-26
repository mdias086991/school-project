import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSchoolsRoutingModule } from './dashboard-schools-routing.module';
import { DashboardSchoolsListComponent } from './dashboard-schools-list/dashboard-schools-list.component';
import { DashboardSchoolsFormComponent } from './dashboard-schools-form/dashboard-schools-form.component';


@NgModule({
  declarations: [
    DashboardSchoolsListComponent,
    DashboardSchoolsFormComponent
  ],
  imports: [
    CommonModule,
    DashboardSchoolsRoutingModule
  ]
})
export class DashboardSchoolsModule { }
