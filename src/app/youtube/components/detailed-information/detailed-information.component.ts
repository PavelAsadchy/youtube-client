import { Component } from '@angular/core';
import { DetailedInformationService } from '../../services/detailed-information.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
    selector: 'app-detailed-information',
    templateUrl: './detailed-information.component.html',
    styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent {

    constructor(public detailedInformationService: DetailedInformationService,
                public navigateService: NavigateService) { }

    public returnToSearchResults(): void {
        this.detailedInformationService.closeDetailedInformation();
        this.navigateService.navigateTo(['/search']);
    }

}
