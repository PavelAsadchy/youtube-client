import { Component, OnInit } from '@angular/core';
import { DetailedInformationService } from '../../services/detailed-information.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-detailed-information',
    templateUrl: './detailed-information.component.html',
    styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent {

    constructor(public detailedInformationService: DetailedInformationService,
                private router: Router) { }

    public returnToSearchResults(): void {
        this.router.navigate(['/search']);
    }

}
