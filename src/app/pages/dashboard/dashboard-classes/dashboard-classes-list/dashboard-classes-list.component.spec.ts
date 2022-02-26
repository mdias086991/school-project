import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClassesListComponent } from './dashboard-classes-list.component';

describe('DashboardClassesListComponent', () => {
  let component: DashboardClassesListComponent;
  let fixture: ComponentFixture<DashboardClassesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClassesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardClassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
