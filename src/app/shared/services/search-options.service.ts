import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
    providedIn: 'root'
})
export class SearchOptionsService {

    public isSearchOptionsBarOpen: boolean = false;

    public isSortingByDateMode: boolean = false;

    public sortByDateUp: boolean = false;

    public isSortingByViewsMode: boolean = false;

    public sortByViewsUp: boolean = false;

    public searchNameStr: string = '';

    public isInputDisabled: boolean = false;

    constructor(private loginService: LoginService) {
        this.loginService.isUserAuthorised$
            .subscribe(isAuth => {
                isAuth
                ? this.isInputDisabled = false
                : this.isInputDisabled = true;
            });
    }

    public searchOptionsBarToggle(): void {
        this.isSearchOptionsBarOpen = !this.isSearchOptionsBarOpen;
    }

    public sortByDateToggle(): void {
        this.isSortingByViewsMode = false;

        if (!this.isSortingByDateMode) {
            this.isSortingByDateMode = true;
            this.sortByDateUp = !this.sortByDateUp;
        } else {
            this.sortByDateUp = !this.sortByDateUp;
        }
    }

    public sortByViewsToggle(): void {
        this.isSortingByDateMode = false;

        if (!this.isSortingByViewsMode) {
            this.isSortingByViewsMode = true;
            this.sortByViewsUp = !this.sortByViewsUp;
        } else {
            this.sortByViewsUp = !this.sortByViewsUp;
        }
    }

    public disableInput(): void {
        this.isInputDisabled = true;
        if (this.isSearchOptionsBarOpen) {
            this.isSearchOptionsBarOpen = !this.isSearchOptionsBarOpen;
        }
    }

    public enableInput(): void {
        this.isInputDisabled = false;
    }

}
