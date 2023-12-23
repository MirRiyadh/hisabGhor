import {View, Text} from 'react-native';
import React from 'react';
import { Box, Image } from '@gluestack-ui/themed';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
const savingIcon = require('../../../assets/icons/budget.png');

const SavingsScreen = () => {
  const datas =[{
    id: "1",
    img: "",
    title: "",
    number: "",
    date: "",
    amount: "",
  },
    {id: "2",
    img: "",
    title: "",
    number: "",
    date: "",
    amount: "",
  }]
  return (
    <GlueStackProvider>
      <Box height={'100%'} px={20} my={30}>
        {datas.map(data=>{
          return <Box borderWidth={1} borderColor='$#DDDDDD' py={7} px={20} borderRadius={5} mb={14}>
        <Box flexDirection='row' justifyContent='flex-end'>
          <Text>...</Text>
        </Box>
        <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
          {/* ------------image content box----------------- */}
          <Box flexDirection='row' gap={10}>
            <Box backgroundColor='$#4849BF' w={45} h={45} borderRadius={50} justifyContent="center"
                alignItems="center"> 
              <Image w={25} h={25} m={'auto'}  source={savingIcon} alt="lol" />
            </Box>
            <Box >
              <Text>Mobile-Bkash</Text>
              <Text>01734431369</Text>
              <Text>23 Mar, 23- 12.00 PM</Text>
            </Box>
         
          </Box>

          {/* ------------price content box----------------- */}
          <Box>
            <Text>10000$</Text>
          </Box>
          {/* ------------arrow content box----------------- */}
          <Box>
            <Text> → </Text>
          </Box>
        </Box>
        </Box>})}
        
        
        
      </Box>
    </GlueStackProvider>
  );
};

export default SavingsScreen;
