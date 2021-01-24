import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { SearchOptionsService } from 'src/app/shared/services/search-options.service';
import { fromEvent, Subscription } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { LoginService } from 'src/app/auth/services/login.service';
import { Store } from '@ngrx/store';
import { YoutubeCardState } from 'src/app/redux/state/models/youtube-card.state';
import { GetYoutubeCardAction } from 'src/app/redux/actions/youtube-card.actions';

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
                private loginService: LoginService,
                private store: Store<YoutubeCardState>) { }

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
                this.store.dispatch(new GetYoutubeCardAction(searchRequest));
            }
        });

        this.loginService.isUserAuthorised$
        .subscribe(isAuth => {
            if (!isAuth) {
                this.clearInput();
            }
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public clearInput(): void {
        this.searchInput.nativeElement.value = '';
    }

}
