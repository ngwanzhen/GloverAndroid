import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
} from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Login from './src/components/Auth/Login'
import Register from './src/components/Auth/Register'
import Profile from './src/components/Profile/Profile'
import SideNav from './src/components/SideNav'
import Session from './src/components/Session/Session'
// import ShowProfile from './src/components/Profile/ShowProfile'
import Message from './src/components/Session/Message'
// import Sensor from './src/components/Sensor/Sensor'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class AndroidTest extends Component {

  render(){
    const { navigation } = this.props;

    return (
      <App navigation={ navigation }/>
    );

  }
}

const SimpleApp = DrawerNavigator({
  // Home: { screen: Register },
  Message: { screen: Message },
  // Profile: { screen: Profile},
  // Login: { screen: Login},
  // Session: { screen: Session},

});

AppRegistry.registerComponent('AndroidTest', () => SimpleApp);

export default SimpleApp
