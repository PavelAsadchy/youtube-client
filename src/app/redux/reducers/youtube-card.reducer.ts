import { YoutubeCardActions, youtubeCardActionsType } from '../actions/youtube-card.actions';
import { initialYoutubeCardState, YoutubeCardState } from '../state/models/youtube-card.state';

// tslint:disable-next-line: typedef
export const youtubeCardReducer = (
    state = initialYoutubeCardState,
    action: YoutubeCardActions): YoutubeCardState => {
        switch (action.type) {
            case youtubeCardActionsType.getYoutubeCard:
                return {
                    ...state,
                    youtubeCard: action.payload
                };
            default:
                return state;
        }
};
