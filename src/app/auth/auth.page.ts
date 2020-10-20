import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private _authService : AuthService,
              private _router : Router) { }

  ngOnInit() {
  }

  logIn(){
    this._authService.logIn();
    this._router.navigateByUrl('/places');
  }

}
