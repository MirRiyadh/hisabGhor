import React, {createContext, useState} from 'react';
import MyDrawer from '../routes/Routes';
export const ContextProvider = createContext({});

export interface IStore {
  isDark: string;
  setIsDark: any;
}

const ContextApi = () => {
  const [isDark, setIsDark] = useState('dark');
  const store: IStore = {
    isDark,
    setIsDark,
  };
  return (
    <ContextProvider.Provider value={store}>
      <MyDrawer />
    </ContextProvider.Provider>
  );
};

export default ContextApi;
