import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { SearchOptionsService } from 'src/app/shared/services/search-options.service';
import { DetailedInformationService } from '../../services/detailed-information.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { YoutubeService } from '../../services/youtube.service';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CustomCard } from '../../../redux/models/custom-card.model';
import { State } from '../../../redux/state';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

    public customCards: Observable<CustomCard[]>;

    constructor(public searchOptionsService: SearchOptionsService,
                public detailedInformationService: DetailedInformationService,
                public navigateService: NavigateService,
                public youtubeService: YoutubeService,
                private store: Store<State>) {
                    this.customCards = store.select('customCard');
                }

    public ngOnInit(): void {
    }

    public selectItem(clickedItem: SearchItem): void {
        this.detailedInformationService.initDetailedInformation(clickedItem);
        this.navigateService.navigateTo(['/search', this.detailedInformationService.selectedItem.id]);
    }

}
