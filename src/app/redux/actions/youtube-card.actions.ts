import { Action } from '@ngrx/store';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

export enum youtubeCardActionsType {
    getYoutubeCard = '[YOUTUBE_CARD] Get',
}

export class GetYoutubeCardAction implements Action {
    public readonly type: string = youtubeCardActionsType.getYoutubeCard;
    constructor(public payload: SearchItem[]) {}
}

export type YoutubeCardActions = GetYoutubeCardAction;
