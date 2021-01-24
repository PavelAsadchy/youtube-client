import { CustomCardActions, customCardActionsType } from '../actions/custom-card.actions';
import { CustomCardState, initialCustomCardState } from '../state/models/custom-card.state';

export const customCardReducer = (
    state = initialCustomCardState,
    action: CustomCardActions): CustomCardState => {
        switch (action.type) {
            case customCardActionsType.addCustomCard:
                return {
                    ...state,
                    customCard: [...state.customCard, action.payload]
                };
            default:
                return state;
        }
};
