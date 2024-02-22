/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppWrapper from './database/realm/realm';

AppRegistry.registerComponent(appName, () => AppWrapper);
