import { SearchItemStatistics } from './search-item-statistics.model';
import { SearchItemSnippet } from './search-item-snippet.model';

export class SearchItem {

    constructor(
        public kind: string,
        public etag: string,
        public id: string,
        public snippet: SearchItemSnippet,
        public statistics: SearchItemStatistics
    ) {}

}
