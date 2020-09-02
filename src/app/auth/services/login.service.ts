import { Injectable } from '@angular/core';
import { LoginFormValue } from '../models/login-form-value.model';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private static authLocalStorageKey: string = 'youtubeClientSavedToken';

    public authName: string = 'Your name';

    public isUserAuthorised: boolean = false;

    constructor(private navigateService: NavigateService) { }

    public saveAuthToken(loginFormValue: LoginFormValue): void {
        localStorage.setItem(
            LoginService.authLocalStorageKey,
            JSON.stringify(loginFormValue)
            );
    }

    public getAuthToken(): any {
        const savedAuthToken: any = localStorage.getItem(LoginService.authLocalStorageKey);
        if (savedAuthToken) {
            this.authName = JSON.parse(savedAuthToken).login;
            this.isUserAuthorised = true;
            return savedAuthToken;
        }
    }

    public logOut(): void {
        localStorage.removeItem(LoginService.authLocalStorageKey);
        this.isUserAuthorised = false;
        this.authName = 'Your name';
        this.navigateService.navigateTo(['/login']);
    }
}
