import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as YoutubeActions from '../actions/youtube-card.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { YoutubeDataService } from 'src/app/youtube/services/youtube-data.service';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { of } from 'rxjs';

@Injectable()
export class YoutubeCardEffects {
    constructor(
        private actions$: Actions,
        private readonly youtubeDataService: YoutubeDataService
    ) {}

    @Effect()
    getYoutubeCard$() {
        return this.actions$.pipe(
            ofType(YoutubeActions.youtubeCardActionsType.getYoutubeCard),
            switchMap((action: {type: string, payload: string}) => {
                console.log('act');
                return this.youtubeDataService.loadYoutubeData(action.payload).pipe(
                    map((response: SearchItem[]) => of(new YoutubeActions.GetYoutubeCardSuccessAction(response)))
                )
            })
        ),
        catchError((err) => of(new YoutubeActions.GetYoutubeCardFailAction(err)));
    };
}
