import { PageInfo } from './page-info';
import { SearchItem } from './search-item.model';

export class Response {

    constructor(
        public kind: string,
        public etag: string,
        public pageinfo: PageInfo,
        public items: SearchItem[]
    ) { }

    public static fromJSON(json: any): Response {
        return Boolean(json)
        ? new Response(json.kind, json.etag, json.pageInfo, json.items)
        : null;
    }
}
