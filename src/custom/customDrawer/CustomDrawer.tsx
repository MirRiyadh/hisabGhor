import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Box,
  GluestackUIProvider,
  HStack,
  Image,
  View,
} from '@gluestack-ui/themed';
import {Linking, useColorScheme} from 'react-native';
import {config} from '@gluestack-ui/config';
import {Text} from '@gluestack-ui/themed';
import {ContextProvider, IStore} from '../../context/ContextApi';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {globalStyle} from '../../styles/GlobalStyle';
import {VStack} from '@gluestack-ui/themed';

const logoIcon = require('../../../assets/icons/save-money.png');

function CustomDrawerContent({navigation, ...props}: any) {
  const XStore: any = useContext(ContextProvider);
  const isDarkMode = useColorScheme() === XStore.isDark;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <GluestackUIProvider config={config}>
      <HStack
        h={200}
        style={{
          backgroundColor: globalStyle.primary,
          // borderTopEndRadius: 20,
        }}
        justifyContent="center"
        alignItems="center"
        gap="$3">
        <Image w="$24" h="$24" source={logoIcon} alt="lolmama" />

        <View py="$5" h={130}>
          <Text
            style={{
              fontSize: 40,
            }}
            py="$4"
            color="$white"
            fontWeight="$black">
            Super
          </Text>
          <Text
            style={{
              fontSize: 40,
            }}
            py="$4"
            color="$white"
            fontWeight="$black">
            Save
          </Text>
        </View>
      </HStack>
      <DrawerContentScrollView {...props} style={[backgroundStyle]}>
        {/* <DrawerItem label="Help"  onPress={() => console.log('lol')} /> */}
        {/* <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        /> */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </GluestackUIProvider>
  );
}

export default CustomDrawerContent;
