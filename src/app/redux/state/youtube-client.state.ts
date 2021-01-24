import { CustomCardState, initialCustomCardState } from './models/custom-card.state';
import { YoutubeCardState, initialYoutubeCardState } from './models/youtube-card.state';

export interface YoutubeClientState {
    readonly custom: CustomCardState;
    readonly youtube: YoutubeCardState;
}

export const initialYoutubeClientState: YoutubeClientState = {
    custom: initialCustomCardState,
    youtube: initialYoutubeCardState
};
