import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import CreateProfile from '../components/Profile/CreateProfile'
import Profile from '../components/Profile/Profile'
import Session from '../components/Session/Session'
import Impact from '../components/Session/Impact'
import SideNav from '../components/SideNav'

// imports the options from SideNav
const drawerNavigation = DrawerNavigator({
  SideNav: {
    screen: SideNav
  }
},
  {
  // Register custom drawer component from sideNav
    contentComponent: props => <SideNav {...props} />
  })

// ***UNHIDE WHEN READY TO DEPLOY*** this registers all the possible screens in the stack (drawer nav is added as a screen which is imported from sidenav page)
export const Screens = StackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  CreateProfile: {
    screen: CreateProfile
  },
  Impact: {
    screen: Impact
  },
  Profile: {
    screen: Profile
  },
  Session: {
    screen: Session
  },
  DrawerNavigation: {
    screen: drawerNavigation
  }
},
// this removes the default header (which lets u go back etc. but leaves a white row)
  {
    headerMode: 'none'
  }
)
