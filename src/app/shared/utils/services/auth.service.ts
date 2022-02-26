import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, pass: string) {
    const userLogged = {"cpf": user, "token": `${user}${pass}${user}${pass}${user}${pass}${user}${pass}${user}${pass}${user}${pass}`}
    localStorage.setItem("user", JSON.stringify(userLogged));
    localStorage.setItem("token", userLogged.token);
  }
}
