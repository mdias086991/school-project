import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSchoolsListComponent } from './dashboard-schools-list.component';

describe('DashboardSchoolsListComponent', () => {
  let component: DashboardSchoolsListComponent;
  let fixture: ComponentFixture<DashboardSchoolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSchoolsListComponent ]
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
