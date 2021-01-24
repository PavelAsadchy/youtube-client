import { createSelector } from '@ngrx/store';
import { CustomCardState } from '../state/models/custom-card.state';
import { YoutubeClientState } from '../state/youtube-client.state';

const selectCustomCardFeature = (state: YoutubeClientState) => state.custom;

export const selectCustomCard = createSelector(
    selectCustomCardFeature,
    (state: CustomCardState) => state.customCard
);
