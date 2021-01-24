import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { YoutubeClientState } from '../../../redux/state/youtube-client.state';
import * as CustomCardActions from '../../../redux/actions/custom-card.actions';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

    public adminForm: FormGroup = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        img: new FormControl('', Validators.required),
        linkVideo: new FormControl('', Validators.required),
    });

    constructor(private store$: Store<YoutubeClientState>,
                private navigateService: NavigateService) { }

    public addCustomCard(): void {
        this.store$.dispatch(new CustomCardActions.AddCustomCardAction({
            title: this.adminForm.get('title').value,
            description: this.adminForm.get('description').value,
            linkToImage: this.adminForm.get('img').value,
            linkToVideo: this.adminForm.get('linkVideo').value,
            creationDate: new Date()
        }));
        this.navigateService.navigateTo(['/search']);
    }

}
