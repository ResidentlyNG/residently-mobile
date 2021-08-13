import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { setCustomText } from 'react-native-global-props';
import { RootSiblingParent } from 'react-native-root-siblings';
import axios from 'axios';
import { PersistGate } from 'redux-persist/integration/react';
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
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootSiblingParent>
            <Router />
          </RootSiblingParent>
        </PersistGate>
      </Provider>
    );
  }
}
