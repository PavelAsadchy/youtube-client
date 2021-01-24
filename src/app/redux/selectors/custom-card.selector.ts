import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomCardState } from '../state/models/custom-card.state';

const selectCustomCardFeature = createFeatureSelector<CustomCardState>('customCard');

export const selectCustomCard = createSelector(
    selectCustomCardFeature,
    (state: CustomCardState) => state.customCard
);
