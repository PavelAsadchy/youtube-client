import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/_models/search-item.model';

@Pipe({
    name: 'searchName'
})
export class SearchPipe implements PipeTransform {
    public transform(searchResults: SearchItem[], inputValue: string): SearchItem[] {
        return searchResults
            .filter(searchItem =>
                searchItem.snippet.title.toUpperCase().toLowerCase()
                .includes(inputValue.toUpperCase().toLowerCase()));
    }
}
