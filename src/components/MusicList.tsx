import { FC, useContext, useEffect } from 'react';
import YouTube from 'react-youtube';
import { YoutubeAPI } from '@/api';
import { Col, Row } from 'antd';
import { PlayListContext } from '@/contexts';

const MusicList: FC = () => {
  const { playList, currentList, changeCurrentList, addPlayList } = useContext(PlayListContext);

  const opts = {
    width: '690',
    height: '390',
    playerVars: {
      autoplay: 0,
      rel: 0,
      origin: 'https://giwon.dev',
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  };

  const init = async () => {
    const list = await YoutubeAPI.list('trailer');
    const item = list.items?.find((item) => item.snippet.resourceId.videoId === 'HGohdZubYrY');
    if (item) {
      item.snippet.resourceId.videoId = 'xzjqSWHI7lk';
    }

    const res = list.items?.map((item) => item.snippet.resourceId.videoId).reverse();

    addPlayList('trailer', res);
    changeCurrentList('best');
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{ padding: '0 50px' }}>
      <Row gutter={[16, 24]}>
        {playList[currentList] &&
          playList[currentList]?.map((videoId, idx) => (
            <Col key={idx} className="gutter-row" lg={16} xl={12} xxl={8}>
              <YouTube
                key={videoId}
                videoId={videoId}
                opts={opts}
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MusicList;
