import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { CustomCard } from '../models/custom-card.model';

export enum youtubeCLientActionsType {
    addCustomCard = '[CUSTOM_CARD] Add',
}

export class AddCustomCardAction implements Action {
    public readonly type: string = youtubeCLientActionsType.addCustomCard;

    constructor(public payload: CustomCard) {}
}

export type YoutubeClientActions = AddCustomCardAction;
