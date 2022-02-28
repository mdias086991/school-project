import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSchoolsFormComponent } from './dashboard-schools/dashboard-schools-form/dashboard-schools-form.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent
  },
  {
    path:'new-school',
    component: DashboardSchoolsFormComponent
  },
  {
    path:'new-school/:id',
    component: DashboardSchoolsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
