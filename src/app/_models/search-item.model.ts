import { SearchItemStatistics } from './search-item-statistics.model';
import { SearchItemSnippet } from './search-item-snippet.model';

export interface SearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: SearchItemSnippet;
    statistics: SearchItemStatistics;
}
