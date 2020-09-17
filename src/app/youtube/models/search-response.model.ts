import { SearchItem } from './search-item.model';

export class SearchResponse {

    constructor(
        public kind: string,
        public etag: string,
        public pageInfo: {
            totalResults: number,
            resultsPerPage: number
        },
        public items: SearchItem[]
    ) {}

    public static fromJSON(json: any): SearchResponse {
        return Boolean(json)
        ? new SearchResponse(json.kind, json.etag, json.pageInfo, json.items)
        : null;
    }
}
