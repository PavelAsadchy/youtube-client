import { ActionReducerMap } from '@ngrx/store';
import { YoutubeClientState } from '../state/youtube-client.state';
import { customCardReducer } from './custom-card.reducer';
import { youtubeCardReducer } from './youtube-card.reducer';

// tslint:disable-next-line: no-any
export const youtubeClientReducers: ActionReducerMap<YoutubeClientState, any> = {
    customCard: customCardReducer,
    youtubeCard: youtubeCardReducer
};
