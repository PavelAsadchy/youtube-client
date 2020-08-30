import { Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Injectable({
    providedIn: 'root'
})
export class DetailedInformationService {

    public selectedItem: SearchItem = null;

    constructor() { }
}
