import { Component } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { SearchOptionsService } from 'src/app/shared/services/search-options.service';
import { DetailedInformationService } from '../../services/detailed-information.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { YoutubeClientState } from '../../../redux/state/youtube-client.state';
import { CustomItem } from '../../models/custom-item.model';
import { selectCustomCard } from 'src/app/redux/selectors/custom-card.selector';
import { selectYoutubeCard, selectYoutubeCardLoading } from 'src/app/redux/selectors/youtube-card.selector';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

    public youtubeCards$: Observable<SearchItem[]> = this.store$.pipe(
        select(selectYoutubeCard)
    );

    public customCards$: Observable<CustomItem[]> = this.store$.pipe(
        select(selectCustomCard)
    );

    public isLoading$: Observable<boolean> = this.store$.pipe(
        select(selectYoutubeCardLoading)
    );

    constructor(public searchOptionsService: SearchOptionsService,
                public detailedInformationService: DetailedInformationService,
                public navigateService: NavigateService,
                private store$: Store<YoutubeClientState>) {}

    public selectItem(clickedItem: SearchItem): void {
        this.detailedInformationService.initDetailedInformation(clickedItem);
        this.navigateService.navigateTo(['/search', this.detailedInformationService.selectedItem.id]);
    }

}
