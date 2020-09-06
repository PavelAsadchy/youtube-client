import { ResponsePageInfo } from './response-page-info';
import { ResponseItem } from './response-item.model';

export class Response {

    constructor(
        public kind: string,
        public etag: string,
        public nextPageToken: string,
        public regionCode: string,
        public pageinfo: ResponsePageInfo,
        public items: ResponseItem[]
    ) { }

    public static fromJSON(json: any): Response {
        return Boolean(json)
        ? new Response(json.kind, json.etag, json.nextPageToken, json.regionCode, json.pageInfo, json.items)
        : null;
    }

    public static getIdFromResponse(response: Response): string {
        const idArr: string[] = [];
        response.items.forEach(item => idArr.push(item.id.videoId));
        return idArr.join(',');
    }
}
