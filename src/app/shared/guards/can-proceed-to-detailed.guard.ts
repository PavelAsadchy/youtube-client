import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailedInformationService } from 'src/app/youtube/services/detailed-information.service';

@Injectable({
    providedIn: 'root'
})
export class CanProceedToDetailedGuard implements CanActivate {

    constructor(private detailedInformationService: DetailedInformationService,
                private router: Router) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            if (this.detailedInformationService.selectedItem) {
                return true;
            } else {
                this.router.navigate(['/search']);
            }
            return false;
    }

}
