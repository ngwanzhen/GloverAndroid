/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

var SmsAndroid = require('react-native-sms-android');
// import SmsAndroid from 'react-native-sms-android';

// const sendSMSFunction = SmsAndroid.sms(
//   '+65 9819 9862', // phone number to send sms to
//   'This is the direct text', // sms body
//   'sendDirect', // sendDirect or sendIndirect
//   (err, message) => {
//   if (err){
//     console.log("error");
//   } else {
//     console.log(message); // callback message
//   }
//   }
//   );

const Message = ()  => {
    return (
      <View style={styles.container}>
      
        <Text style={styles.welcome}>
            i hope works!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }

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
  button: {
     padding: 10,
     borderWidth: .5,
     borderColor: '#bbb',
     margin: 10,
     alignItems: 'center',
     justifyContent: 'center'
   }
});

Message.navigationOptions = {
 drawer: {
     icon: () => (
       <Image
         source={require('../imgs/home.png')}
         style={[styles.tabIcon, {tintColor: 'black'}]}
       />
 )}
};


export default Message

// AppRegistry.registerComponent('AndroidTest', () => AndroidTest);
