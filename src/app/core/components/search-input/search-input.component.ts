import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { SearchOptionsService } from 'src/app/shared/services/search-options.service';
import { fromEvent, Subscription } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements AfterViewInit, OnDestroy {

    private subscription: Subscription = null;

    @ViewChild('searchInput')
    public searchInput: ElementRef;

    constructor(public searchOptionsService: SearchOptionsService,
                public youtubeService: YoutubeService) { }

    public ngAfterViewInit(): void {
        this.subscription = fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(
                map((event: any) => event.target.value),
                filter(res => res.length > 2),
                startWith(''),
                debounceTime(1000),
                distinctUntilChanged()
        ).subscribe((searchRequest: string) => {
            if (searchRequest) {
                this.youtubeService.searchRequest$.emit(searchRequest);
                this.youtubeService.startLoading();
            }
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
