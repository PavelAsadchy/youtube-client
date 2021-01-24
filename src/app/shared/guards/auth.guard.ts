import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../auth/services/login.service';
import { NavigateService } from '../services/navigate.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private loginService: LoginService,
                private navigateService: NavigateService) { }

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            if (this.loginService.getAuthToken()) {
                return true;
            } else {
                this.navigateService.navigateTo(['/login']);
            }
            return false;
    }

}
