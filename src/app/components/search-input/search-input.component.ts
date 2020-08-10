import { Component, OnInit } from '@angular/core';
import { SearchOptionsService } from 'src/app/_services/search-options.service';
import { SearchInputService } from 'src/app/_services/search-input.service';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

    constructor(public searchOptionsService: SearchOptionsService,
                public searchInputService: SearchInputService) { }

}
