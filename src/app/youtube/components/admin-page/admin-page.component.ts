import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

    public adminForm: FormGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        discription: new FormControl('', Validators.required),
        img: new FormControl('', Validators.required),
        linkVideo: new FormControl('', Validators.required),
    });

    constructor() { }

    public onSubmit(): void {}

}
