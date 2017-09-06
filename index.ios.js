/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';
import App from './App'
import { DrawerNavigator } from 'react-navigation';
import Message from './src/components/Session/Message'

class AndroidTest extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render(){
    const { navigation } = this.props;

    return (
      <App />
    );

  }
}

const SimpleApp = DrawerNavigator({
  Home: { screen: App },
  Message: { screen: Message }
});

AppRegistry.registerComponent('AndroidTest', () => SimpleApp);
