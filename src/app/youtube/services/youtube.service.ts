import { Injectable } from '@angular/core';
import { YoutubeDataService } from './youtube-data.service';
import { SearchItem } from '../models/search-item.model';
import { EventEmitter } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    public isLoading$: Subject<boolean> = new Subject<boolean>();

    public searchRequest$: EventEmitter<string> = new EventEmitter<string>();

    public isSearchResultLoading: boolean = true;

    public searchResults: SearchItem[] = [];

    constructor(private youtubeDataService: YoutubeDataService) {
        this.searchRequest$
            .pipe(
                switchMap(searchRequest =>
                    this.youtubeDataService.loadYoutubeData(searchRequest))
            ).subscribe(searchResult =>
                this.initSearchResults(searchResult));
    }

    private initSearchResults(searchResults: SearchItem[]): void {
        this.searchResults = searchResults;
        this.isLoading$.next(false);
    }

    public startLoading(): void {
        this.isLoading$.next(true);
    }

}
