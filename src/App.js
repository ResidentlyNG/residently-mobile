import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { setCustomText } from 'react-native-global-props';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Midnight } from './components';
import Router from './Router';
import { store } from './store';

const customTextProps = {
  style: {
    color: Midnight,
    fontSize: 14,
  },
};
setCustomText(customTextProps);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootSiblingParent>
          <Router />
        </RootSiblingParent>
      </Provider>
    );
  }
}
