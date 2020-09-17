import { CustomCardState, initialCustomCardState } from './models/custom-card.state';
import { YoutubeCardState, initialYoutubeCardState } from './models/youtube-card.state';

export interface YoutubeClientState {
    readonly customCard: CustomCardState;
    readonly youtubeCard: YoutubeCardState;
}

export const initialYoutubeClientState: YoutubeClientState = {
    customCard: initialCustomCardState,
    youtubeCard: initialYoutubeCardState
};
