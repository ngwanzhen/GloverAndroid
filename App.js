import React, { Component } from 'react'
import { Screens } from './src/config/router'
// const TestFairy = require('react-native-testfairy')
const HockeyApp = require('react-native-hockeyapp');

class App extends Component {

  componentWillMount() {
      HockeyApp.configure("80cbdb3c7e6a434fb5b39860a40ee3fe", true);
  }

  componentDidMount() {
      HockeyApp.start();
      HockeyApp.checkForUpdate(); // optional
  }

  // componentWillMount()  {
  //   TestFairy.begin("<a71e470e343d1d4f42222bff939ebca69a79bd69>");
  // }

  render () {
    return <Screens />
  }
}

export default App
