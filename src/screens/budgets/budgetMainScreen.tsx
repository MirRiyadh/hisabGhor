import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BudgetMainScreen = () => {
    const [modal, setModal] = useState(false);
  return (
    <View>
       <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={30} />}
          title="Total"
          amount="10500"
          btTitle="Add Sector"
          modal={modal}
          setModal={setModal}
        />
    </View>
  )
}

export default BudgetMainScreen;