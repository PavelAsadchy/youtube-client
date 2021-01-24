import { Action } from '@ngrx/store';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

export enum youtubeCardActionsType {
    getYoutubeCard = '[YOUTUBE] Get Cards',
    getYoutubeCardSuccess = '[YOUTUBE] Get Cards Success',
    getYoutubeCardFail = '[YOUTUBE] Get Cards Fail'
}

export class GetYoutubeCardAction implements Action {
    public readonly type: string = youtubeCardActionsType.getYoutubeCard;
    constructor(public payload: string) {};
}

export class GetYoutubeCardSuccessAction implements Action {
    public readonly type: string = youtubeCardActionsType.getYoutubeCardSuccess;
    constructor(public payload: SearchItem[]) {};
}

export class GetYoutubeCardFailAction implements Action {
    public readonly type: string = youtubeCardActionsType.getYoutubeCardFail;
    constructor(public payload: any) {};
}

export type YoutubeCardActions =
    GetYoutubeCardAction |
    GetYoutubeCardSuccessAction |
    GetYoutubeCardFailAction;
