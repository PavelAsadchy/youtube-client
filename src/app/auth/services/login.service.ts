import { Injectable } from '@angular/core';
import { LoginFormValue } from '../models/login-form-value.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private static authLocalStorageKey: string = 'youtubeClientSavedToken';

    constructor() { }

    public saveAuthToken(loginFormValue: LoginFormValue): void {
        localStorage.setItem(
            LoginService.authLocalStorageKey,
            JSON.stringify(loginFormValue)
            );
    }

    public getAuthToken(): any {
        return localStorage.getItem(LoginService.authLocalStorageKey);
    }
}
