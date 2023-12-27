import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawerContent from '../custom/customDrawer/CustomDrawer';

import HomeRoutes from './homeRoutes';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: 'orange',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#000',
          headerShown: false,

          drawerStyle: {
            backgroundColor: '#00FF0000',
          },
          drawerInactiveBackgroundColor: 'transparent',
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {/* screens */}

        <Drawer.Screen
          name="Home"
          component={HomeRoutes}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
