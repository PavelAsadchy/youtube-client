import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Response } from '../models/response';
import { RequestParameters } from '../models/request-parameters';
import { SearchResponse } from '../models/search-response.model';

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

    private apiKey: string = 'AIzaSyD_9dpznUMdzn-tDiVIzlFvt3UrBFlUqB8';

    constructor(private httpClient: HttpClient) { }

    private getVideoIdFromSearchRequest(searchRequest: string): Observable<string> {
        return this.httpClient.get<any>(`${this.searchRequestParameters.baseUrl}?part=${this.searchRequestParameters.part}&type=${this.searchRequestParameters.type}&maxResults=${this.searchRequestParameters.maxResults}&key=${this.apiKey}&q=` + searchRequest)
            .pipe(
                map((json: any) => {
                    return Boolean(json)
                        ? Response.fromJSON(json)
                        : [];
                }),
                map((array: any) => {
                    return Response.getIdFromResponse(array);
                })
            );
    }

    public loadYoutubeData(searchRequest: string): Observable<any> {
        return this.getVideoIdFromSearchRequest(searchRequest)
            .pipe(
                mergeMap(idForVideoRequest =>
                    this.httpClient.get<any>(`${this.videoRequestParameters.baseUrl}?part=${this.videoRequestParameters.part}&id=${idForVideoRequest}&key=${this.apiKey}`)
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
