import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderDashboardComponent } from './shared/components/header-dashboard/header-dashboard.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SimpleNotificationsModule.forRoot(
      {
        position: ['top', 'right']
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
