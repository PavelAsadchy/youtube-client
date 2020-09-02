import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../models/search-item.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Response } from '../models/response';

@Injectable({
    providedIn: 'root'
})
export class YoutubeDataService {

    private baseUrl: string = 'assets';

    public youtubeData$: Observable<SearchItem[]> = this.loadYoutubeData();

    constructor(private httpClient: HttpClient) { }

    private loadYoutubeData(): Observable<SearchItem[]> {
        return this.httpClient.get<SearchItem[]>(`${this.baseUrl}/defaultYoutubeResponse.json`)
            .pipe(
                map((json: any) => {
                    return Boolean(json)
                    ? Response.fromJSON(json).items
                    : [];
                }),
                map((response: []) => {
                    return response
                    .filter(Boolean)
                    .map(SearchItem.fromJSON);
                })
            );
    }
}
