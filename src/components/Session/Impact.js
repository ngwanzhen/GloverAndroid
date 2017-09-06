import React, { Component } from 'react'
import { Text, View, Switch, Platform } from 'react-native'
import SmsAndroid from 'react-native-sms-android'
import styles from '../styles/styles.js'

export default class Impact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      seconds: 15,
      value: false
    }
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
    if (this.state.seconds === 0 && Platform.OS === 'android') {
      Message()
    }
  }

  render () {
    return (
      <View style={styles.impactContainer}>
        <Text style={styles.impactTitle}>
          IMPACT DETECTED
        </Text>
        <View style={styles.impactTimer}>
          <Text style={styles.impactText}>{this.state.seconds}</Text>
        </View>

        <View style={{flexDirection: 'row', zIndex: 1, marginVertical: 10 }}>
          <Text style={styles.header}>
            Dismiss?
          </Text>
          <Switch
            style={{ marginLeft: 10 }}
            onTintColor={'#66CCCC'}
            thumbTintColor={'white'}
            value={this.state.value}
            onValueChange={(value) => this.setState({value})}
          />
        </View>
      </View>
    )
  }
}

const Message = () => {
  SmsAndroid.sms(
    '+65 8569 4149', // phone number to send sms to
    'This is the sms text', // sms body
    'sendDirect', // sendDirect or sendIndirect
    (err, message) => {
      if (err) {
        console.log('error')
      } else {
        console.log(message) // callback message
      }
    }
  )
}
