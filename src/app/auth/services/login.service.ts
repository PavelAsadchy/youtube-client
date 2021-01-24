import { Injectable } from '@angular/core';
import { LoginFormValue } from '../models/login-form-value.model';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private static authLocalStorageKey: string = 'youtubeClientSavedToken';

    public authName$: BehaviorSubject<string> = new BehaviorSubject('Your name');

    public isUserAuthorised$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private navigateService: NavigateService) { }

    public saveAuthToken(loginFormValue: LoginFormValue): void {
        localStorage.setItem(
            LoginService.authLocalStorageKey,
            JSON.stringify(loginFormValue)
            );
    }

    public getAuthToken(): string {
        const savedAuthToken: any = localStorage.getItem(LoginService.authLocalStorageKey);
        if (savedAuthToken) {
            const savedAuthName: string = JSON.parse(savedAuthToken).login;
            this.authName$.next(savedAuthName);
            this.isUserAuthorised$.next(true);
            return savedAuthToken;
        }
    }

    public logOut(): void {
        localStorage.removeItem(LoginService.authLocalStorageKey);
        this.isUserAuthorised$.next(false);
        this.authName$.next('Your name');
        this.navigateService.navigateTo(['/login']);
    }
}
