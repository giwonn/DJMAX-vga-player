import { FC } from 'react';
import './App.css';
import { Layout } from 'antd';
import { MusicList, Navigation } from '@/components';
import { PlayListProvider } from '@/contexts';

const App: FC = () => {
  const { Header, Content } = Layout;
  return (
    <PlayListProvider>
      <div className="App" style={{ minWidth: '800px' }}>
        <Layout>
          <Header style={{ background: 'white', lineHeight: '40px', height: '13vh' }}>
            <Navigation />
          </Header>
          <Content style={{ height: '87vh', paddingTop: '20px' }}>
            <MusicList />
          </Content>
        </Layout>
      </div>
    </PlayListProvider>
  );
};

export default App;
