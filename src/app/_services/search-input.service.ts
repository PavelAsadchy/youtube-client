import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SearchInputService {

    public searchInput: string = '';

    public isSearchResultShown: boolean = false;

    constructor() { }

    public showSearchResult(): void {
        this.isSearchResultShown = true;
    }
}
