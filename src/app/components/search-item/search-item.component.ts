import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from 'src/app/_models/search-item.model';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html',
    styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

    @Input()
    public item: SearchItem;

    public publishedAt: Date = null;

    public datesLag: number = null;

    constructor() { }

    public ngOnInit(): void {
        this.setPublishedAt();
        this.setDatesLag();
    }

    public setPublishedAt(): void {
        this.publishedAt = new Date(this.item.snippet.publishedAt);
    }

    public setDatesLag(): void {
        const today: Date = new Date();
        this.datesLag = ((today.getTime() - this.publishedAt.getTime()) / (1000 * 3600 * 24));
    }
}
