import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

    public loginForm: FormGroup = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor() { }

    public onSubmit(): void {
        console.log('submit');
    }

}
