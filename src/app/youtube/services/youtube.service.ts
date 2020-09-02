import { Injectable } from '@angular/core';
import { YoutubeDataService } from './youtube-data.service';
import { SearchItem } from '../models/search-item.model';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    public isSearchResultLoading: boolean = true;

    public searchResults: SearchItem[] = [];

    constructor(private youtubeDataService: YoutubeDataService) {
        this.youtubeDataService.youtubeData$
        .subscribe((searchResults: SearchItem[]) => {
            this.initSearchResults(searchResults);
            this.isSearchResultLoading = false;
        });
    }

    private initSearchResults(searchResults: SearchItem[]): void {
        this.searchResults = searchResults;
    }
}
