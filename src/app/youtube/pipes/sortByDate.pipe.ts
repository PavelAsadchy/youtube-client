import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Pipe({
    name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
    public transform(
        searchResults: SearchItem[], isSortingMode: boolean, sortDirection: boolean): SearchItem[] {
            if (isSortingMode) {
                const newArr: SearchItem[] = searchResults.slice();
                sortDirection === true
                ? newArr.sort(function(a: SearchItem, b: SearchItem): any {
                    const start: any = new Date(a.snippet.publishedAt);
                    const end: any = new Date(b.snippet.publishedAt);
                    return (start - end);
                })
                : newArr.sort(function(a: SearchItem, b: SearchItem): any {
                    const start: any = new Date(a.snippet.publishedAt);
                    const end: any = new Date(b.snippet.publishedAt);
                    return (end - start);
                });

                return newArr;
            } else {
                return searchResults;
            }
    }
}
