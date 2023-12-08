import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React, {createContext, useState} from 'react';

import MyDrawer from '../routes/Routes';
export const ContextProvider = createContext({});

export interface IStore {
  isDark: string;
  setIsDark: any;
  riad: string;
}

const ContextApi = () => {
  const [isDark, setIsDark] = useState('dark');

  const store: IStore = {
    isDark,
    setIsDark,
    riad,
  };
  return (
    <ContextProvider.Provider value={store}>
      <MyDrawer />
    </ContextProvider.Provider>
  );
};

export default ContextApi;
