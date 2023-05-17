/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { enableLatestRenderer } from 'react-native-maps';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
enableLatestRenderer();

AppRegistry.registerComponent(appName, () => App);
