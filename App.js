import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
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

const App = (props)  => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native Navigation Sample!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
      <Button
          onPress={() => navigate('Message')}
          title="Go to Message Screen"
        />
    </View>
  );
}

const drawerNavigation = DrawerNavigator({
  Tabs: {
    screen: Session
  }
}, {
  // Register custom drawer component
  contentComponent: props => <SideNav {...props} />
})

export default StackNavigator({
  // Login: {
  //   screen: Login
  // },
  Register: {
    screen: Register
  },
  // Profile: {
  //   screen: Profile
  // },
  // ShowProfile: {
  //   screen: ShowProfile
  // },
  // Sensor: {
  //   screen: Sensor
  // },
  // Message: {
  //   screen: Message
  // },
  DrawerNavigation: {
    screen: drawerNavigation
  }
}, {
  headerMode: 'none'
})

// export default App
