import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Box, GluestackUIProvider} from '@gluestack-ui/themed';
import {useColorScheme} from 'react-native';
import {config} from '@gluestack-ui/config';
import {Text} from '@gluestack-ui/themed';
import {ContextProvider, IStore} from '../../context/ContextApi';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function CustomDrawerContent({navigation, ...props}: any) {
  const {isDark, setIsDark}: IStore = useContext(ContextProvider);
  const isDarkMode = useColorScheme() === isDark;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%',
  };
  return (
    <DrawerContentScrollView {...props} style={[backgroundStyle]}>
      {/* <DrawerItem label="Help" onPress={() => console.log('lol')} /> */}
      <GluestackUIProvider config={config}>
        <Box>
          <Text>OK</Text>
        </Box>
      </GluestackUIProvider>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
