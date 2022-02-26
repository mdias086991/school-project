import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home-page/home/home.component';
import { LoginPageComponent } from './home-page/login-page/login-page.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';


@NgModule({
  declarations: [
    HomeComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ]
})
export class PagesModule { }
