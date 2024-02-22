/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {RealmProvider} from './database/realm/realm';

AppRegistry.registerComponent(appName, () => RealmProvider);
