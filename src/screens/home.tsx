import React, {useContext} from 'react';
import GlueStackProvider from '../gluestack_config/gluestackProvider';
import {Box, HStack, Icon, Image, Switch, View} from '@gluestack-ui/themed';
import {ContextProvider, IStore} from '../context/ContextApi';
import {globalStyle} from '../styles/GlobalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
  const menuIcon = require('../../assets/whitedots.png');
  const {isDark} : IStore = useContext(ContextProvider);
  
  return (
    <GlueStackProvider>
      <Box height={'100%'}>
        <Box height={'$80'} bg={'$indigo500'} py={'$4'}>
          <HStack justifyContent="space-between" px={'$2'}>
            <MaterialCommunityIcons name="menu" size={22} color={'white'} />
            <Switch
              size="md"
              isChecked={true}
              onChange={e =>
                e.nativeEvent.value ? setIsDark('light') : setIsDark('dark')
              }
            />
          </HStack>
        </Box>
      </Box>
    </GlueStackProvider>
  );
}
