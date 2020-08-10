import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/_models/search-item.model';

@Pipe({
    name: 'sortByViews'
})
export class SortByViewsPipe implements PipeTransform {
    public transform(
        searchResults: SearchItem[], isSortingMode: boolean, sortDirection: boolean): SearchItem[] {
            if (isSortingMode) {
                sortDirection === true
                ? searchResults.sort((a: SearchItem, b: SearchItem) =>
                    +a.statistics.viewCount - +b.statistics.viewCount)
                : searchResults.sort((a: SearchItem, b: SearchItem) =>
                    +b.statistics.viewCount - +a.statistics.viewCount);
            }
            const newArr: SearchItem[] = searchResults.slice();
            return newArr;
    }
}
