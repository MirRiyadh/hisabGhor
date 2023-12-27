import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DueEstimationScreen from '../screens/due/dueEstimationScreen';
import Home from '../screens/home/home';
import SavingsScreen from '../screens/savings/savingsScreen';
import SavingsHistoryScreen from '../screens/savings/savingsHistoryScreen';

const Stack = createNativeStackNavigator();

function HomeRoutes() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        fullScreenGestureEnabled: true,
        customAnimationOnGesture: true,
        animation: 'slide_from_right',
        animationDuration: 150,
        // statusBarColor: GlobalStyles.Black,
      }}>
      <Stack.Screen
        name="Homepage"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Due"
        component={DueEstimationScreen}
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
        name="Savings"
        component={SavingsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Savings-History"
        component={SavingsHistoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default HomeRoutes;
