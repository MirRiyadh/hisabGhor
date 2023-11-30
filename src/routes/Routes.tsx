import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import App from '../../App';
import {NavigationContainer} from '@react-navigation/native';
import CustomDrawerContent from '../custom/customDrawer/CustomDrawer';
// import {View, Text} from '@gluestack-ui/themed';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator>
        <View>
          <Text>Onek valo</Text>
        </View>
        <Drawer.Screen
          name="home"
          component={App}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator> */}
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {/* screens */}

        <Drawer.Screen
          name="home"
          component={App}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
