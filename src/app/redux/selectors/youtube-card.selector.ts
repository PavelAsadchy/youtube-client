import { createSelector } from '@ngrx/store';
import { YoutubeCardState } from '../state/models/youtube-card.state';
import { YoutubeClientState } from '../state/youtube-client.state';

// tslint:disable-next-line: typedef
const selectYoutubeCardFeature = (state: YoutubeClientState) => state.youtubeCard;

// tslint:disable-next-line: typedef
export const selectYoutubeCard = createSelector(
    selectYoutubeCardFeature,
    (state: YoutubeCardState) => state.youtubeCard
);
