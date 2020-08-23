import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/_models/search-item.model';

@Pipe({
    name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
    public transform(
        searchResults: SearchItem[], isSortingMode: boolean, sortDirection: boolean): SearchItem[] {
            if (isSortingMode) {
                sortDirection === true
                ? searchResults.sort(function(a: SearchItem, b: SearchItem): any {
                    const start: any = new Date(a.snippet.publishedAt);
                    const end: any = new Date(b.snippet.publishedAt);
                    return (start - end);
                })
                : searchResults.sort(function(a: SearchItem, b: SearchItem): any {
                    const start: any = new Date(a.snippet.publishedAt);
                    const end: any = new Date(b.snippet.publishedAt);
                    return (end - start);
                });

                const newArr: SearchItem[] = searchResults.slice();
                console.log(newArr[0].snippet.publishedAt);
                return newArr;
            } else {
                return searchResults;
            }
    }
}
