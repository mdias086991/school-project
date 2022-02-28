import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardSchoolsModule } from './dashboard-schools/dashboard-schools.module';
import { AuthService } from 'src/app/shared/utils/services/auth.service';
import { Token } from 'src/app/shared/utils/services/generateToken';


@NgModule({
  declarations: [
    HomeDashboardComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    DashboardSchoolsModule,
  ],
  providers: [
    AuthService,
    Token
  ]
})
export class DashboardModule { }
