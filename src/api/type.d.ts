export interface FetchRequest {
  get: (url: RequestInfo, options: Record<string, any>) => Promise<any>;
}

type FetchParameters = Parameters<FetchRequest[keyof FetchRequest]>;

export type CallApi = (
  method: keyof FetchRequest,
  url: FetchParameters[0],
  options: FetchParameters[1]
) => ReturnType<FetchRequest[keyof FetchRequest]>;

export interface ApiResponse {
  youtube: {
    list: {
      etag: string;
      items: Array<{
        kind: string;
        id: {
          kind: string;
          videoId: string;
        };
        kind: string;
        snippet: {
          channelId: string;
          channelTitle: string;
          description: string;
          liveBroadcastContent: string;
          publishTime: string;
          publishedAt: string;
          resourceId: {
            kind: string;
            videoId: string;
          };
          thumbnails: Record<
            'default' | 'high' | 'medium',
            { url: string; width: number; height: number }
          >;
          title: string;
        };
      }>;
      kind: string;
      nextPageToken: string;
      pageInfo: {
        totalResults: number;
        resultsPerPage: number;
      };
      regionCode: string;
    };
  };
}
