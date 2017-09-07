import React, { Component } from 'react'
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Profile from '../components/Profile/Profile'
import SideNav from '../components/SideNav'
import Session from '../components/Session/Session'
import Impact from '../components/Session/Impact'
import Map from '../components/Map/Map'
// import Sensor from '../components/Sensor/Sensor'

//imports the options from SideNav
const drawerNavigation = DrawerNavigator({
  SideNav: {
    screen: SideNav
  },
},
{
  // Register custom drawer component from sideNav
  contentComponent: props => <SideNav {...props} />
})

//***UNHIDE WHEN READY TO DEPLOY*** this registers all the possible screens in the stack (drawer nav is added as a screen which is imported from sidenav page)
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
  Impact: {
    screen: Impact
  },
  Map: {
    screen: Map
  },
  Session: {
    screen: Session
  },
  DrawerNavigation: {
    screen: drawerNavigation
  }
},
//this removes the default header (which lets u go back etc. but leaves a white row)
{
  headerMode: 'none'
}
)
