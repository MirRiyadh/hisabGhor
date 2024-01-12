import { View } from 'react-native'
import React from 'react'
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import { Text } from '@gluestack-ui/themed';

const LoanHistoryScreen = () => {
  return (
    <GlueStackProvider>
      <Text>loanHistoryScreen</Text>
    </GlueStackProvider>
  )
}

export default LoanHistoryScreen;