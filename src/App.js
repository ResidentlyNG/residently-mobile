import React, { Component } from 'react';
import { setCustomText } from 'react-native-global-props';
import { Midnight } from './components';
import Router from './Router';

const customTextProps = {
  style: {
    color: Midnight,
    fontSize: 14,
  },
};
setCustomText(customTextProps);

export default class App extends Component {
  render() {
    return <Router />;
  }
}
