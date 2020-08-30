import { Component, OnInit, Input, Output } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { EventEmitter } from '@angular/core';

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

    @Output()
    public selectedItem: EventEmitter<SearchItem> = new EventEmitter<SearchItem>();

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

    public selectItem(): void {
        this.selectedItem.emit(this.item);
    }
}
