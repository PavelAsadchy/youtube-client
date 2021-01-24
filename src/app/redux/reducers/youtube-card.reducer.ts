import { initialYoutubeCardState, YoutubeCardState } from '../state/models/youtube-card.state';
import { YoutubeCardActions, youtubeCardActionsType } from '../actions/youtube-card.actions';

export const youtubeCardReducer = (
    state = initialYoutubeCardState,
    action: YoutubeCardActions): YoutubeCardState => {
        switch (action.type) {
            case youtubeCardActionsType.getYoutubeCard:
                return {
                    ...state,
                    loading: true,
                    
                };
            case youtubeCardActionsType.getYoutubeCardSuccess:
                return {
                    ...state,
                    loading: false,
                    youtubeCard: action.payload,
                };
            case youtubeCardActionsType.getYoutubeCardFail:
                return {
                    ...state,
                    loading: false,
                    youtubeCard: [],
                }
            default:
                return state;
        }
};
