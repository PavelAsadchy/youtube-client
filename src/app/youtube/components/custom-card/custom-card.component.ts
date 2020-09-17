import { Component, Input } from '@angular/core';
import { CustomItem } from '../../models/custom-item.model';

@Component({
    selector: 'app-custom-card',
    templateUrl: './custom-card.component.html',
    styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent {

    @Input()
    public customItem: CustomItem;

    constructor() { }

}
