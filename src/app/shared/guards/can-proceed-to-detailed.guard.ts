import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailedInformationService } from 'src/app/youtube/services/detailed-information.service';
import { NavigateService } from '../services/navigate.service';

@Injectable({
    providedIn: 'root'
})
export class CanProceedToDetailedGuard implements CanActivate {

    constructor(private detailedInformationService: DetailedInformationService,
                private navigateService: NavigateService) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            if (this.detailedInformationService.selectedItem) {
                return true;
            } else {
                this.navigateService.navigateTo(['/search']);
            }
            return false;
    }

}
