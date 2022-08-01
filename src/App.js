import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { setCustomText } from 'react-native-global-props';
import { RootSiblingParent } from 'react-native-root-siblings';
import axios from 'axios';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Sentry from '@sentry/react-native';
import DeviceInfo from 'react-native-device-info';
import SplashScreen from 'react-native-splash-screen';
import { Midnight } from './components';
import Router from './Router';
import { persistor, store } from './store';
import { BASE_URL } from './utils/api';

const customTextProps = {
  style: {
    color: Midnight,
    fontSize: 14,
  },
};
setCustomText(customTextProps);
const SENTRY_DSN =
  'https://af1ef8aaa1894351b1a3271ea71f8e9d@o293131.ingest.sentry.io/5994375';

Sentry.init({
  dsn: SENTRY_DSN,
});

const addBuildContext = () => {
  Sentry.setTags({
    appVersion: DeviceInfo.getVersion(),
    buildNumber: DeviceInfo.getBuildNumber(),
    systemName: DeviceInfo.getSystemName(),
    systemVersion: DeviceInfo.getSystemVersion(),
  });
};
addBuildContext();

axios.interceptors.request.use((config) => {
  if (config.url !== `${BASE_URL}/login`) {
    const token =
      store.getState().auth.user && store.getState().auth.user.token;
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
  return config;
});

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootSiblingParent>
            <SafeAreaProvider>
              <Router />
            </SafeAreaProvider>
          </RootSiblingParent>
        </PersistGate>
      </Provider>
    );
  }
}
