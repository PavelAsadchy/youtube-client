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

    public cardBorderStyle: any = {
        'border-bottom': '5px solid red'
    };

    constructor() { }

    public ngOnInit(): void {
        this.setPublishedAt();
        const today: Date = new Date();
        if (today.getDate() - this.publishedAt.getDate() < 7) {
            this.cardBorderStyle = {
                'border-bottom': '5px solid blue'
            };
        }
    }

    public setPublishedAt(): void {
        this.publishedAt = new Date(this.item.snippet.publishedAt);
    }

    // public trigger(): void {
    //     console.log(this.item.snippet.title);
    // }

}
