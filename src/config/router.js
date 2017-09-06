import React, { Component } from 'react'
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Profile from '../components/Profile/Profile'
import SideNav from '../components/SideNav'
import Session from '../components/Session/Session'
import Impact from '../components/Session/Impact'
// import Sensor from '../components/Sensor/Sensor'

const drawerNavigation = DrawerNavigator({
  Tabs: {
    screen: Session
  }
}, {
  // Register custom drawer component
  contentComponent: props => <SideNav {...props} />
})

export const Tabs = StackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Profile: {
    screen: Profile
  },
  DrawerNavigation: {
    screen: drawerNavigation
  },
  Impact: {
    screen: Impact
  }
}, {
  headerMode: 'none'
})

// export const Tabs = TabNavigator({
//   // Register: {
//   //   screen: Register,
//   //   navigationOptions: {
//   //     tabBarLabel: 'Register',
//   //     tabBarIcon: ({ tintColor }) => <Icon name="assignment-ind" size={35} color={tintColor} />,
//   //   },
//   // },
//   // Login: {
//   //   screen: Login,
//   //   navigationOptions: {
//   //     tabBarLabel: 'Login',
//   //     tabBarIcon: ({ tintColor }) => <Icon name="fingerprint" size={35} color={tintColor} />,
//   //   },
//   // },
//   Impact: {
//     screen: Impact,
//     navigationOptions: {
//       tabBarLabel: 'Impact',
//       tabBarIcon: ({ tintColor }) => <Icon name="record-voice-over" size={35} color={tintColor} />,
//     },
//   },
//   Session: {
//     screen: Session,
//     navigationOptions: {
//       tabBarLabel: 'Session',
//       tabBarIcon: ({ tintColor }) => <Icon name="motorcycle" size={35} color={tintColor} />,
//     },
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor }) => <Icon name="face" size={35} color={tintColor} />,
//     },
//   }
// });
