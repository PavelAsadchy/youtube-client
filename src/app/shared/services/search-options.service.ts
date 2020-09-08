import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SearchOptionsService {

    public isSearchOptionsBarOpen: boolean = false;

    public isSortingByDateMode: boolean = false;

    public sortByDateUp: boolean = false;

    public isSortingByViewsMode: boolean = false;

    public sortByViewsUp: boolean = false;

    public searchNameStr: string = '';

    public isDetailedMode: boolean = false;

    constructor() { }

    public searchOptionsBarToggle(): void {
        this.isSearchOptionsBarOpen = !this.isSearchOptionsBarOpen;
    }

    public sortByDateToggle(): void {
        this.isSortingByViewsMode = false;

        if (!this.isSortingByDateMode) {
            this.isSortingByDateMode = true;
            this.sortByDateUp = !this.sortByDateUp;
        } else {
            this.sortByDateUp = !this.sortByDateUp;
        }
    }

    public sortByViewsToggle(): void {
        this.isSortingByDateMode = false;

        if (!this.isSortingByViewsMode) {
            this.isSortingByViewsMode = true;
            this.sortByViewsUp = !this.sortByViewsUp;
        } else {
            this.sortByViewsUp = !this.sortByViewsUp;
        }
    }

    public initDetailedMode(): void {
        this.isDetailedMode = true;
        if (this.isSearchOptionsBarOpen) {
            this.isSearchOptionsBarOpen = !this.isSearchOptionsBarOpen;
        }
    }

    public closeDetailedMode(): void {
        this.isDetailedMode = false;
    }

}
