import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSchoolsFormComponent } from './dashboard-schools-form.component';

describe('DashboardSchoolsFormComponent', () => {
  let component: DashboardSchoolsFormComponent;
  let fixture: ComponentFixture<DashboardSchoolsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSchoolsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSchoolsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
