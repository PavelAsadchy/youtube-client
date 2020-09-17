import { Action } from '@ngrx/store';
import { CustomItem } from 'src/app/youtube/models/custom-item.model';

export enum customCardActionsType {
    addCustomCard = '[CUSTOM_CARD] Add'
}

export class AddCustomCardAction implements Action {
    public readonly type: string = customCardActionsType.addCustomCard;

    constructor(public payload: CustomItem) {}
}

export type CustomCardActions = AddCustomCardAction;
