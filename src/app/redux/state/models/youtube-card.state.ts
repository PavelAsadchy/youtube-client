import { SearchItem } from 'src/app/youtube/models/search-item.model';

export interface YoutubeCardState {
    youtubeCard: SearchItem[];
}

export const initialYoutubeCardState: YoutubeCardState = {
    youtubeCard: []
};
