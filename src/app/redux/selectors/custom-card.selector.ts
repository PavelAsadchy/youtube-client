import { createSelector } from '@ngrx/store';
import { CustomCardState } from '../state/models/custom-card.state';
import { YoutubeClientState } from '../state/youtube-client.state';

// tslint:disable-next-line: typedef
const selectCustomCardFeature = (state: YoutubeClientState) => state.custom;

// tslint:disable-next-line: typedef
export const selectCustomCard = createSelector(
    selectCustomCardFeature,
    (state: CustomCardState) => state.customCard
);
