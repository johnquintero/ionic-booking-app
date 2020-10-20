import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private _authService : AuthService,
              private _router :Router){}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    console.log(this._authService.userIsAuthenticated);
    if (!this._authService.userIsAuthenticated) {
        this._router.navigateByUrl('/auth');
    }
    return this._authService.userIsAuthenticated;
  }
  
}
