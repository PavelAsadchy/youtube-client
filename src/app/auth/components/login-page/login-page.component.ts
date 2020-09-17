import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';

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

    public authName: string = '';

    constructor(public loginService: LoginService,
                public navigateService: NavigateService) { }

    public ngOnInit(): void {
        const response: any = this.loginService.getAuthToken();
        if (response) {
            this.navigateService.navigateTo(['/search']);
        }
    }

    public onSubmit(): void {
        this.loginService.saveAuthToken(this.loginForm.value);
        this.navigateService.navigateTo(['/search']);
    }

}
