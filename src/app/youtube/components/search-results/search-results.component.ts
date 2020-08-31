import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { searchResults } from 'src/app/youtube/models/defaultResponse';
import { SearchOptionsService } from 'src/app/shared/services/search-options.service';
import { SearchInputService } from 'src/app/shared/services/search-input.service';
import { DetailedInformationService } from '../../services/detailed-information.service';
import { Router } from '@angular/router';
import { NavigateService } from 'src/app/shared/services/navigate.service';

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
                private router: Router,
                public navigateService: NavigateService) { }

    public ngOnInit(): void {
    }

    public selectItem(selectedItem: SearchItem): void {
        this.detailedInformationService.selectedItem = selectedItem;
        // this.router.navigate(['/search', this.detailedInformationService.selectedItem.id]);
        this.navigateService.navigateTo(['/search', this.detailedInformationService.selectedItem.id]);
    }

}
