import { View, Text } from 'react-native'
import React from 'react'
import GlueStackProvider from '../../gluestack_config/gluestackProvider'

const savingsScreen = () => {
  return (
    <GlueStackProvider>
      <Text>savingsScreen</Text>
    </GlueStackProvider>
  )
}

export default savingsScreen