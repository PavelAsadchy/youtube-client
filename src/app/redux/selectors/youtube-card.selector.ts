import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeCardState } from '../state/models/youtube-card.state';

const selectYoutubeCardFeature = createFeatureSelector<YoutubeCardState>('youtubeCard');

export const selectYoutubeCard = createSelector(
    selectYoutubeCardFeature,
    (state: YoutubeCardState) => state.youtubeCard
);

export const selectYoutubeCardLoading = createSelector(
    selectYoutubeCardFeature,
    (state: YoutubeCardState) => state.loading
);
