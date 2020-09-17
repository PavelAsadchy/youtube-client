import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Response } from '../models/response.model';
import { RequestParameters } from '../models/request-parameters.model';
import { SearchResponse } from '../models/search-response.model';
import { SearchItem } from '../models/search-item.model';

@Injectable({
    providedIn: 'root'
})
export class YoutubeDataService {

    private searchRequestParameters: RequestParameters = {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search',
        part: 'snippet',
        type: 'video',
        maxResults: '50'
    };

    private videoRequestParameters: RequestParameters = {
        baseUrl: 'https://www.googleapis.com/youtube/v3/videos',
        part: 'snippet,statistics',
    };

    constructor(private httpClient: HttpClient) { }

    private getVideoIdFromSearchRequest(searchRequest: string): Observable<string> {
        return this.httpClient.get<Response>(`${this.searchRequestParameters.baseUrl}?part=${this.searchRequestParameters.part}&type=${this.searchRequestParameters.type}&maxResults=${this.searchRequestParameters.maxResults}&q=` + searchRequest)
            .pipe(
                map((json: Response) => {
                    return Boolean(json)
                        ? Response.fromJSON(json)
                        : [];
                }),
                map((array: Response) => {
                    return Response.getIdFromResponse(array);
                })
            );
    }

    public loadYoutubeData(searchRequest: string): Observable<SearchItem[]> {
        return this.getVideoIdFromSearchRequest(searchRequest)
            .pipe(
                mergeMap(idForVideoRequest =>
                    this.httpClient.get<SearchResponse>(`${this.videoRequestParameters.baseUrl}?part=${this.videoRequestParameters.part}&id=${idForVideoRequest}`)
                    .pipe(
                        map(response => {
                            return Boolean(response)
                            ? SearchResponse.fromJSON(response).items
                            : [];
                        })
                    )
                )
            );
    }
}
