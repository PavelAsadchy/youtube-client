import { RespomseItemId } from './response-item-id.model';
import { SearchItemSnippet } from './search-item-snippet.model';

export interface ResponseItem {
    kind: string;
    etag: string;
    id: RespomseItemId;
    snippet: SearchItemSnippet;
}
