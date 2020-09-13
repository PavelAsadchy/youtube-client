import { Action } from '@ngrx/store';
import { CustomCard } from '../models/custom-card.model';
import { YoutubeClientActions, youtubeCLientActionsType} from '../actions/youtube-client.actions';
import { State } from '../state';

const initialState: CustomCard = {
    title: 'title',
    description: 'description',
    linkToImage: 'linkToImage',
    linkToVideo: 'linkToVideo',
    creationDate: new Date(),
};

export function youtubeClientReducer(state: CustomCard[], action: YoutubeClientActions): CustomCard[] {
    switch (action.type) {
        case youtubeCLientActionsType.addCustomCard:
            return [...state, action.payload];
        default:
            return state;
    }
}
