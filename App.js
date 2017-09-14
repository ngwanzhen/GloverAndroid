import React, { Component } from 'react'
import { Screens } from './src/config/router'
// const TestFairy = require('react-native-testfairy')
const HockeyApp = require('react-native-hockeyapp');

var HockeyApp = require('react-native-hockeyapp')

class App extends Component {
  constructor () {
    super()
    console.ignoredYellowBox = [
      'Setting a timer'
    ]
  }

  componentWillMount () {
    HockeyApp.configure('a89476c454944d389838875238ca328e', true)
  }

  componentDidMount () {
    HockeyApp.start()
    HockeyApp.checkForUpdate() // optional
  }

  render () {
    return <Screens />
  }
}

export default App
