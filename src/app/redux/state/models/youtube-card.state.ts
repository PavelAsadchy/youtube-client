import { SearchItem } from 'src/app/youtube/models/search-item.model';

export interface YoutubeCardState {
    youtubeCard: SearchItem[];
    loading: boolean;
}

export const initialYoutubeCardState: YoutubeCardState = {
    youtubeCard: [],
    loading: false,
};
