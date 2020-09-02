import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { searchResults } from 'src/app/youtube/models/defaultResponse';
import { SearchOptionsService } from 'src/app/shared/services/search-options.service';
import { SearchInputService } from 'src/app/shared/services/search-input.service';
import { DetailedInformationService } from '../../services/detailed-information.service';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { YoutubeService } from '../../services/youtube.service';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

    public searchResults: SearchItem[] = searchResults;

    constructor(public searchOptionsService: SearchOptionsService,
                public searchInputService: SearchInputService,
                public detailedInformationService: DetailedInformationService,
                public navigateService: NavigateService,
                public youtubeService: YoutubeService) { }

    public ngOnInit(): void {
    }

    public selectItem(clickedItem: SearchItem): void {
        this.detailedInformationService.initDetailedInformation(clickedItem);
        // this.detailedInformationService.selectedItem = selectedItem;
        // this.detailedInformationService.datesLag = selectedItem.
        this.navigateService.navigateTo(['/search', this.detailedInformationService.selectedItem.id]);
    }

}
