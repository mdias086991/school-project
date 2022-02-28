import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../utils/services/auth.service';
import { Token } from '../../utils/services/generateToken';

import { HeaderDashboardComponent } from './header-dashboard.component';

describe('HeaderDashboardComponent', () => {
  let component: HeaderDashboardComponent;
  let fixture: ComponentFixture<HeaderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDashboardComponent ],
      providers: [
        AuthService,
        Token
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
