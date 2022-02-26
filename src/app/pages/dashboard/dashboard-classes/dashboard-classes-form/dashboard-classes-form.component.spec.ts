import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClassesFormComponent } from './dashboard-classes-form.component';

describe('DashboardClassesFormComponent', () => {
  let component: DashboardClassesFormComponent;
  let fixture: ComponentFixture<DashboardClassesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClassesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardClassesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
