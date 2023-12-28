import { View, Text } from 'react-native'
import React, { useState } from 'react'
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
import CommonDateFilter from '../../custom/dateFilter/commonDateFilter';
import { Box } from '@gluestack-ui/themed';

const SavingsHistoryScreen = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <GlueStackProvider>
      <CommonHeaderPlusBack
        isBack={true}
        title="Bkash Number"
        isSearch={true}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <CommonDateFilter />
      <Box height={'100%'} px={20} my={10}></Box>
    </GlueStackProvider>
  )
}

export default SavingsHistoryScreen;