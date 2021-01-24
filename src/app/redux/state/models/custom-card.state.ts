import { CustomItem } from 'src/app/youtube/models/custom-item.model';

export interface CustomCardState {
    customCard: CustomItem[];
}

export const initialCustomCardState: CustomCardState = {
    customCard: []
};
