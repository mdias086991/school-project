import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolsService } from 'src/app/shared/utils/services/schools.service';

import { DashboardSchoolsListComponent } from './dashboard-schools-list.component';

describe('DashboardSchoolsListComponent', () => {
  let component: DashboardSchoolsListComponent;
  let fixture: ComponentFixture<DashboardSchoolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSchoolsListComponent ],
      providers: [
        SchoolsService,
        HttpClient
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSchoolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
