import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardSchoolsRoutingModule } from './dashboard-schools-routing.module';
import { DashboardSchoolsListComponent } from './dashboard-schools-list/dashboard-schools-list.component';
import { DashboardSchoolsFormComponent } from './dashboard-schools-form/dashboard-schools-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AvailableClassesComponent } from './dashboard-schools-form/components/available-classes/available-classes.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';


@NgModule({
  declarations: [
    DashboardSchoolsListComponent,
    DashboardSchoolsFormComponent,
    AvailableClassesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardSchoolsRoutingModule,
    SharedModule,
    NgxBootstrapIconsModule.pick(allIcons)

  ],
  exports: [
    DashboardSchoolsListComponent
  ]
})
export class DashboardSchoolsModule { }
