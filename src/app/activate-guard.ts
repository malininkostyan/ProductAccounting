import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { NgModule } from '@angular/core';
import {AuthCookie} from './auth-cookies-handler';

@NgModule()
export class ActivateGuard implements CanActivate {
  constructor(private router: Router, private _authCookie: AuthCookie) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.router.navigate(['/']);
    return this._authCookie.getAdmin();
  }
}