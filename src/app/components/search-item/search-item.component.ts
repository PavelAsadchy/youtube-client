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

    public cardBorderStyle: {} = null;

    constructor() { }

    public ngOnInit(): void {
        this.setPublishedAt();
        const today: Date = new Date();
        const datesLag: number = ((today.getTime() - this.publishedAt.getTime()) / (1000 * 3600 * 24));
        switch (true) {
            case (datesLag < 7):
                this.cardBorderStyle = {
                    'border-bottom': '5px solid blue'
                };
                break;
            case (datesLag < 30):
                this.cardBorderStyle = {
                    'border-bottom': '5px solid green'
                };
                break;
            case (datesLag < 180):
                this.cardBorderStyle = {
                    'border-bottom': '5px solid orange'
                };
                break;

            default:
                this.cardBorderStyle = {
                    'border-bottom': '5px solid red'
                };
        }
    }

    public setPublishedAt(): void {
        this.publishedAt = new Date(this.item.snippet.publishedAt);
    }
}
