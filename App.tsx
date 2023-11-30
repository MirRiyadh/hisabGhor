/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-reanimated';
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
import {ContextProvider, IStore} from './src/context/ContextApi';

function App(): JSX.Element {
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
      <GluestackUIProvider config={config}>
        <Box
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
          height="100%">
          <Switch
            size="md"
            isChecked={true}
            onChange={e =>
              e.nativeEvent.value ? setIsDark('light') : setIsDark('dark')
            }
          />

          <Text> Ok </Text>
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
