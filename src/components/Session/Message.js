import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

var SmsAndroid = require('react-native-sms-android')
// import SmsAndroid from 'react-native-sms-android'

class Impact extends Component {
  constructor (props) {
    super(props)
    this.state = { seconds: 5 }
  }

  componentDidMount () {
    setInterval(
      () => {
        if (this.state.seconds > 0) {
          this.setState({seconds: this.state.seconds - 1})
        }
      },
      1000
    )
  }

  componentDidUpdate () {
    if (this.state.seconds === 0) {
      Message()
    }
  }

  render () {
    return (
      <View style={styles.impactContainer}>
        <View style={styles.impactTimer}>
        <Text style={styles.impactText}>{this.state.seconds}</Text>
      </View>
      </View>
    )
  }
}

const Message = ()  => {
            SmsAndroid.sms(
          '+65 8569 4149', // phone number to send sms to
          'This is the sms text', // sms body
          'sendDirect', // sendDirect or sendIndirect
          (err, message) => {
            if (err){
              console.log("error")
            } else {
              console.log(message) // callback message
            }
          }
        )
      }

const styles = StyleSheet.create({
  impactContainer: {
    flex: 1,
    backgroundColor: '#e62739',
    alignItems: 'center',
    justifyContent: 'center'
  },
  impactTimer: {
    width: 200,
    height: 200,
    borderRadius: 200/2,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  impactText: {
    fontSize: 80,
    fontWeight: '700'
  },
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
})

export default Impact
