import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardClassesRoutingModule } from './dashboard-classes-routing.module';
import { DashboardClassesListComponent } from './dashboard-classes-list/dashboard-classes-list.component';
import { DashboardClassesFormComponent } from './dashboard-classes-form/dashboard-classes-form.component';


@NgModule({
  declarations: [
    DashboardClassesListComponent,
    DashboardClassesFormComponent
  ],
  imports: [
    CommonModule,
    DashboardClassesRoutingModule
  ]
})
export class DashboardClassesModule { }
