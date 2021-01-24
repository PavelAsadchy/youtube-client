import { createSelector } from '@ngrx/store';
import { YoutubeCardState } from '../state/models/youtube-card.state';
import { YoutubeClientState } from '../state/youtube-client.state';

const selectYoutubeCardFeature = (state: YoutubeClientState) => state.youtube;

export const selectYoutubeCard = createSelector(
    selectYoutubeCardFeature,
    (state: YoutubeCardState) => state.youtubeCard
);

export const selectYoutubeCardLoading = createSelector(
    selectYoutubeCardFeature,
    (state: YoutubeCardState) => state.loading
);
