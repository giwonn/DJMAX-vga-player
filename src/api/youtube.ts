import { callApi } from './common';
import type { ApiResponse } from './type';

type Response = ApiResponse['youtube'];
export class YoutubeAPI {
  private static url = {
    playList: 'https://www.googleapis.com/youtube/v3/playlistItems',
    search: 'https://www.googleapis.com/youtube/v3/search',
  };

  public static playListId: Record<string, string> = {
    trailer: 'PL7Luh18gE9g21lqgmcSYYiTlptA7Qe6Dc',
    vextension: 'PLyelZ-DLhJ8nXPrbeH-ihzoJ09FsSaUzf',
    vextension2: 'PLU8lzjyWpjtg_HoO3yq2zcXO17CA8awKq',
    nexon: 'PLjodItrU4wF2E3MZr2C4m9efQeJQL3O8o',
    deemo: 'PLieES6kyU6mT5zv-GynWIMCKJF16_n4wu',
    cytus: 'PLieES6kyU6mTfitndWG2IrP-Hjq0WIfpb',
    chunithm: 'PLH02tEN6Uel3C4aupojexNkJKgfm3UZfO',
    groovecoster: 'PLqvCQXdLDQF0zNtrmLgYsws9Nq_ESyLQP',
  };
  private static options = {
    key: 'AIzaSyDbgaOxISXE22lfmgWv3DuXS8wU_TllPPc',
    part: 'snippet',
    maxResults: 25,
  };

  public static list(category: string): Promise<Response['list']> {
    if (!this.playListId[category]) return this.search(category);

    return callApi('get', this.url.playList, {
      ...this.options,
      playlistId: this.playListId[category],
    });
  }

  public static search(keyword: string) {
    return callApi('get', this.url.search, { ...this.options, q: `djmax respect v ${keyword}` });
  }
}
