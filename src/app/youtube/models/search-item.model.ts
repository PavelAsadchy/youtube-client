import { SearchItemStatistics } from './search-item-statistics.model';
import { SearchItemSnippet } from './search-item-snippet.model';

// export interface SearchItem {
//     kind: string;
//     etag: string;
//     id: string;
//     snippet: SearchItemSnippet;
//     statistics: SearchItemStatistics;
// }

export class SearchItem {

    constructor(
        public kind: string,
        public etag: string,
        public id: string,
        public snippet: SearchItemSnippet,
        public statistics: SearchItemStatistics
    ) {}

    public static fromJSON(json: any): SearchItem {
        return Boolean(json)
        ? new SearchItem(json.kind, json.etag, json.id, json.snippet, json.statistics)
        : null;
    }
}
