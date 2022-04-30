import { createContext, useState } from 'react';

const PlayListContext = createContext({
  playList: {} as Record<string, string[]>,
  addPlayList: (name: string, list: string[]) => {},
  currentList: '',
  changeCurrentList: (name: string) => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PlayListProvider = ({ children }: Props): JSX.Element => {
  const [playList, setPlayList] = useState({
    best: [
      'YuABnnIBZ9E',
      'sayzAjrOvEs',
      'RrIyhEq7TX0',
      'lTLRtySvmLY',
      '2DIz_n_y9e4',
      'l17BsZY885Q',
      '0erburZS4JM',
      'aMY5b6InJSk',
      'LzLhEk9Rnnw',
      'v_RVYcX42HI',
      'O8fJBo7JuQ8',
      'Ntz6wCOUNic',
    ],
  } as Record<string, string[]>);
  const [currentList, setCurrentList] = useState('');

  const addPlayList = (name: string, list: string[]): void => {
    if (playList[name]) return;
    setPlayList(() => ({ ...playList, [name]: list }));
  };

  const changeCurrentList = (name: string) => {
    setCurrentList(name);
  };

  return (
    <PlayListContext.Provider
      value={{
        playList,
        addPlayList,
        currentList,
        changeCurrentList,
      }}
    >
      {children}
    </PlayListContext.Provider>
  );
};

export { PlayListContext, PlayListProvider };
