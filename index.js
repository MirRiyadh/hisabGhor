/**
 * @format
 */


import {AppRegistry,LogBox} from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values',
]);
import {name as appName} from './app.json';
import AppWrapper from './database/realm/realm';

AppRegistry.registerComponent(appName, () => AppWrapper);
