import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Pipe({
    name: 'sortByViews'
})
export class SortByViewsPipe implements PipeTransform {
    public transform(
        searchResults: SearchItem[], isSortingMode: boolean, sortDirection: boolean): SearchItem[] {
            if (isSortingMode) {
                const newArr: SearchItem[] = searchResults.slice();
                sortDirection === true
                ? newArr.sort((a: SearchItem, b: SearchItem) =>
                    +a.statistics.viewCount - +b.statistics.viewCount)
                : newArr.sort((a: SearchItem, b: SearchItem) =>
                    +b.statistics.viewCount - +a.statistics.viewCount);

                return newArr;
            } else {
                return searchResults;
            }
    }
}
