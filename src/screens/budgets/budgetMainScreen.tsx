import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import { Box } from '@gluestack-ui/themed';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';

const BudgetMainScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState(false);
  const datas = [
    {
      id: '1',
      img: '',
      title: '',
      number: '',
      date: '',
      amount: '',
    },
    {id: '2', img: '', title: '', number: '', date: '', amount: ''},
  ];
  return (
    <GlueStackProvider>
      <Box>
      <CommonHeaderPlusBack
        isBack={true}
        title="Budget"
        isSearch={true}
        searchText={searchText}
        setSearchText={setSearchText}
      />

        <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={30} />}
          title="Total"
          amount="10500"
          btTitle="Add Sector"
          modal={modal}
          setModal={setModal}
         />
      </Box>
       
    </GlueStackProvider>
  )
}

export default BudgetMainScreen;