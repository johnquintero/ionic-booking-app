import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = true;
  
  constructor() { }

  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }

  logIn(){
    this._userIsAuthenticated = true;
  }

  logOut(){
    this._userIsAuthenticated = false;
  }

}
