import { FC, useContext } from 'react';
import { Input, Tag } from 'antd';
import { YoutubeAPI } from '@/api';
import { PlayListContext } from '@/contexts';

const onSearch = (value: string) => console.log(value);

const Navigation: FC = () => {
  const { Search } = Input;
  const { playList, addPlayList, changeCurrentList } = useContext(PlayListContext);

  const changePlayList = async (keyword: string) => {
    if (!playList[keyword]) {
      const { items } = await YoutubeAPI.list(keyword);
      addPlayList(
        keyword,
        items?.map((item) => item.snippet.resourceId?.videoId ?? item.id.videoId)
      );
    }

    changeCurrentList(keyword);
  };

  return (
    <>
      <Search placeholder="검색 작동안하니 입력 ㄴㄴ" allowClear onSearch={onSearch} size="large" />
      <div>
        <Tag color="black" onClick={async () => await changePlayList('best')}>
          <b>주인장 최애곡</b>
        </Tag>
        <Tag color="black" onClick={async () => await changePlayList('trailer')}>
          <b>ALL TRAILERS</b>
        </Tag>
        <br></br>
        <Tag color="#4adb9a" onClick={async () => await changePlayList('guilty gear')}>
          GUILTY GEAR
        </Tag>
        <Tag color="#ffb400" onClick={async () => await changePlayList(`girls' frontline`)}>
          GIRLS' FRONTLINE
        </Tag>
        <Tag color="#3f7496" onClick={async () => await changePlayList('groovecoster')}>
          GROOVE COSTER
        </Tag>
        <Tag color="black" onClick={async () => await changePlayList('deemo')}>
          DEEMO
        </Tag>
        <Tag color="#a0cdc9" onClick={async () => await changePlayList('cytus')}>
          CYTUS
        </Tag>
        <Tag color="#efbd26" onClick={async () => await changePlayList('chunithm')}>
          CHUNITHM
        </Tag>
        <Tag color="#ac935b" onClick={async () => await changePlayList('estimate')}>
          ESTIMATE
        </Tag>
        <Tag color="#b1c202" onClick={async () => await changePlayList('nexon')}>
          NEXON
        </Tag>
        <Tag color="#d403c9" onClick={async () => await changePlayList('mush dash')}>
          MUSE DASH
        </Tag>
        <br />
        <Tag color="#cf275b" onClick={async () => await changePlayList('vextension')}>
          V EXTENSION
        </Tag>
        <Tag color="#cf275b" onClick={async () => await changePlayList('vextension2')}>
          V EXTENSION 2
        </Tag>
      </div>
    </>
  );
};

export default Navigation;
