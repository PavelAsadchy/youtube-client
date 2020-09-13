import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { State } from '../../../redux/state';
import { CustomCard } from '../../../redux/models/custom-card.model';
import * as YoutubeClientActions from '../../../redux/actions/youtube-client.actions';

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

    constructor(private store: Store<State>) { }

    public addCustomCard(): void {
        this.store.dispatch(new YoutubeClientActions.AddCustomCardAction({
            title: this.adminForm.get('title').value,
            description: this.adminForm.get('description').value,
            linkToImage: this.adminForm.get('img').value,
            linkToVideo: this.adminForm.get('linkVideo').value,
            creationDate: new Date()
        }));
    }

}
