import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public loginForm: FormGroup = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(public loginService: LoginService,
                private router: Router) { }

    public ngOnInit(): void {
        const savedAuthToken: any = this.loginService.getAuthToken();
        if (savedAuthToken) {
            this.router.navigate(['/search']);
        }
    }

    public onSubmit(): void {
        this.loginService.saveAuthToken(this.loginForm.value);
        this.router.navigate(['/search']);
    }

}
