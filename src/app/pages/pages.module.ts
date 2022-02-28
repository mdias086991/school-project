import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home-page/home/home.component';
import { LoginPageComponent } from './home-page/login-page/login-page.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AuthService } from '../shared/utils/services/auth.service';
import { Token } from '../shared/utils/services/generateToken';


@NgModule({
  declarations: [
    HomeComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [
    AuthService,
    Token
  ]
})
export class PagesModule { }
