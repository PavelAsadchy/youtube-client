import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SearchOptionsService } from 'src/app/shared/services/search-options.service';

@Injectable({
    providedIn: 'root'
})
export class DetailedInformationService {

    public selectedItem: SearchItem = null;

    public datesLag: number = null;

    constructor(private searchOptionsService: SearchOptionsService) { }

    public initDetailedInformation(clickedItem: SearchItem): void {
        this.selectedItem = clickedItem;
        this.initDatesLag(clickedItem);
        this.searchOptionsService.initDetailedMode();
    }

    public initDatesLag(clickedItem: SearchItem): void {
        const today: Date = new Date();
        this.datesLag =
            ((today.getTime() - new Date(clickedItem.snippet.publishedAt).getTime()) / (1000 * 3600 * 24));
    }

    public closeDetailedInformation(): void {
        this.searchOptionsService.closeDetailedMode();
    }
}
