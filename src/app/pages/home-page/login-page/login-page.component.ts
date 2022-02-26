import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/utils/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public applicationName: string = "School Project"
  public applicationDescription: string = "Gerenciamento de escolas"
  constructor(private router: Router, private loginService: AuthService) { }

  ngOnInit(): void {
  }

  accessDashboard(user: string, password: string): void {
    this.loginService.login(user, password);
    this.router.navigate(['/'])
  }

}
