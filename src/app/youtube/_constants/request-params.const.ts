import { RequestParameters } from '../models/request-parameters.model';

export const SEARCH_REQUEST_PARAMS: RequestParameters = {
  baseUrl: 'https://www.googleapis.com/youtube/v3/search',
  part: 'snippet',
  type: 'video',
  maxResults: '50',
};

export const VIDEO_REQUEST_PARAMS: RequestParameters = {
  baseUrl: 'https://www.googleapis.com/youtube/v3/videos',
  part: 'snippet,statistics',
};
