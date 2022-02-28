import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { CardsComponent } from './components/cards/cards.component';
import { TableComponent } from './components/table/table.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SchoolsService } from './utils/services/schools.service';
import { NgbDropdown, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { AuthService } from './utils/services/auth.service';
import { Token } from './utils/services/generateToken';

@NgModule({
  declarations: [
    HeaderDashboardComponent,
    CardsComponent,
    TableComponent,
    TitlePageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbPaginationModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgbDropdownModule
  ],
  exports: [
    HeaderDashboardComponent,
    CardsComponent,
    TableComponent,
    TitlePageComponent
  ],
  providers: [
    SchoolsService,
    AuthService,
    Token
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
