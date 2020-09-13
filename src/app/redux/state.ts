import { SearchItem } from '../youtube/models/search-item.model';
import { CustomCard } from './models/custom-card.model';

export interface State {
    readonly customCard: CustomCard[];
    // readonly youtubeCard: SearchItem[];
}
