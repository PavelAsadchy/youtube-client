import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Injectable({
    providedIn: 'root'
})
export class DetailedInformationService {

    public selectedItem: SearchItem = null;

    public datesLag: number = null;

    constructor() { }

    public initDetailedInformation(clickedItem: SearchItem): void {
        this.selectedItem = clickedItem;
        this.initDatesLag(clickedItem);
    }

    public initDatesLag(clickedItem: SearchItem): void {
        const today: Date = new Date();
        this.datesLag =
            ((today.getTime() - new Date(clickedItem.snippet.publishedAt).getTime()) / (1000 * 3600 * 24));
    }
}
