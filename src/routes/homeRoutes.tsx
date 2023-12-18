import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DueEstimationScreen from '../screens/due/dueEstimationScreen';
import Home from '../screens/home/home';

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
        name="Home"
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
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default HomeRoutes;
