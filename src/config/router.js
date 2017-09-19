import React from 'react'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import CreateProfile from '../components/Profile/CreateProfile'
import Profile from '../components/Profile/Profile'
import Session from '../components/Session/Session'
import Impact from '../components/Session/Impact'
import SideNav from '../components/SideNav'

const sessionWDrawer = DrawerNavigator({
  Tabs: {
    screen: Session
  }
},
  {
    contentComponent: props => <SideNav {...props} />
  })

const profileWDrawer = DrawerNavigator({
  Tabs: {
    screen: Profile
  }
},
  {
    contentComponent: props => <SideNav {...props} />
  })

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
  sessionWDrawer: {
    screen: sessionWDrawer
  },
  Impact: {
    screen: Impact
  },
  Session: {
    screen: Session
  },
  profileWDrawer: {
    screen: profileWDrawer
  }
},
  {
    headerMode: 'none'
  }
)
