import React, {useState, useContext} from 'react';
import {Pressable, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {config} from '@gluestack-ui/config';
import {
  GluestackUIProvider,
  Box,
  Text,
  Button,
  Switch,
} from '@gluestack-ui/themed';
import {ContextProvider, IStore} from '../context/ContextApi';

function GlueStackProvider({children}: any): JSX.Element {
  const {isDark, setIsDark}: IStore = useContext(ContextProvider);
  const isDarkMode = useColorScheme() === isDark;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
    </SafeAreaView>
  );
}

export default GlueStackProvider;
