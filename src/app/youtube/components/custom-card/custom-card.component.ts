import { Component, Input } from '@angular/core';
import { CustomCard } from 'src/app/redux/models/custom-card.model';

@Component({
    selector: 'app-custom-card',
    templateUrl: './custom-card.component.html',
    styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent {

    @Input()
    public customCard: CustomCard;

    constructor() { }

}
