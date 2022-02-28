import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Token } from './generateToken';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private generateToken: Token, private router: Router) { }

  login(user: string, pass: string) {
    const userLogged = {"cpf": user, "token": this.generateToken.makeTokenUser(user, pass)}
    localStorage.setItem("user", JSON.stringify(userLogged));
    localStorage.setItem("token", userLogged.token);
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.router.navigate(['/auth'])
  }
}
