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
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {/* screens */}

        <Drawer.Screen
          name="HomeRoute"
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
