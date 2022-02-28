import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { SchoolsService } from 'src/app/shared/utils/services/schools.service';
import { ToastNotificationService } from 'src/app/shared/utils/services/toast-notification.service';

import { DashboardSchoolsFormComponent } from './dashboard-schools-form.component';
class MockNotificationsService {
  showMessageSuccessToast() {
    return of({
      timeOut: '5000',
      animate: 'fade',
      pauseOnHover: false,
      clickToClose: true
    })
  }
}

describe('DashboardSchoolsFormComponent', () => {
  let component: DashboardSchoolsFormComponent;
  let fixture: ComponentFixture<DashboardSchoolsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSchoolsFormComponent ],
      providers: [
        SchoolsService,
        HttpClient,
        HttpHandler,
        { provide: ToastNotificationService, useClass: MockNotificationsService},
        {
          provide: Router,
          useValue: {
            events: of(event),
            navigated: false
          }
        },
        { provide: ActivatedRoute,
          useValue: { queryParams: of({ get: (token: any) => 12345 }) }
        }]
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
