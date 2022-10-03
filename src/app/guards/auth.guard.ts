import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor ( private LoginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.isLogin();
  }

  isLogin (): any {
    if( this.LoginService.isLoggedIn()) {
      console.log('Estoy logeado');
      return true;
  }
  this.router.navigateByUrl('/dashboard/dashboard');

  }
  
}
