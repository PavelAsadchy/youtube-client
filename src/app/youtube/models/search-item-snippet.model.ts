import { SearchItemThumbnails } from './search-item-thumbnails.model';

export interface SearchItemSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
        default: SearchItemThumbnails,
        medium: SearchItemThumbnails,
        high: SearchItemThumbnails,
        standard: SearchItemThumbnails,
        maxres: SearchItemThumbnails
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: {
        title: string,
        description: string
    };
    defaultAudioLanguage: string;
}
