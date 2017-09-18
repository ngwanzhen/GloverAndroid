import React, { Component } from 'react'
import { Text, View, Image, StatusBar, Switch, TouchableOpacity, BackHandler } from 'react-native'
import styles from '../styles/styles.js'
import DrawerButton from '../DrawerButton'
import BluetoothSerial from 'react-native-bluetooth-serial'
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box"

// device info
const device = {
  name: 'HC-06',
  id: '98:D3:31:FD:68:8E'
}

export default class Session extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: false,
      isEnabled: false,
      devices: [],
      connected: false,
      crash: false
    }
  }

  onSelect = data => {
    this.setState(data)
  }

  connect () {
    BluetoothSerial.connect(device.id)
      .then((res) => {
        alert(`Connected to device ${device.name}`)
        this.setState({
          connected: true
        })
      })
      .catch((err) => alert(err.message))
  }

  disconnect () {
    BluetoothSerial.disconnect()
      .then(() => this.setState({
        connected: false
      }))
      .catch((err) => alert(err.message))
  }

  readData () {
    BluetoothSerial.readFromDevice()
    .then((data) => {
      if (data && this.state.value && this.state.crash === false) {
        this.setState({
          crash: true
        })
        this.props.navigation.navigate('Impact',{onSelect: this.onSelect})
      }
    })
    .catch((err) => { console.log(err) })
  }

  componentDidMount () {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
    message: "<h2>Location</h2>Please turn on Location Services.<br/>",
    ok: "Got it",
    cancel: "",
    enableHighAccuracy: false,
    showDialog: true
    }).then(function(success) {
    }).catch((error) => {
      alert(error.message)
    })

    BackHandler.addEventListener('hardwareBackPress', () => {
      LocationServicesDialogBox.forceCloseDialog()
    })

    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()])
    .then((values) => {
      const [isEnabled, devices] = values
      this.setState({
        isEnabled,
        devices
      })
      if (this.state.isEnabled === false) {
        alert('Bluetooth must be switched on & paired with device for automatic crash detection')
      }
    })
    this.connect()
    setInterval(() => {
      this.readData(), 200
    })
  }

  render () {
    const { navigate } = this.props.navigation
    let containerStyle = this.state.value ? styles.endSessionContainer : styles.startSessionContainer
    let bgImage = this.state.value ? require('../../images/cyclist.gif') : require('../../images/bicycle.gif')
    let content = this.state.value ? 'End This Session?' : 'Start New Session?'
    let switchDisplay = this.state.connected ? 'flex' : 'none'
    // let bangDisplay = this.state.value ? 'flex' : 'none'

    return (
      <View style={containerStyle}>
        <StatusBar barStyle='dark-content' />
        <DrawerButton onPress={() => navigate('DrawerOpen')} />

        <Image source={bgImage} style={styles.sessionLogo} />

        <View style={{flexDirection: 'row', zIndex: 1}}>
          <Text style={styles.header}>
            {content}
          </Text>

          <Switch
            style={{marginLeft: 10, display: switchDisplay}}
            onTintColor={'#8b1e7d'}
            thumbTintColor={'white'}
            value={this.state.value}
            onValueChange={(value) => this.setState({value})}
          />
        </View>

        {/* <TouchableOpacity
          style={{ zIndex: 1, display: bangDisplay }}
          onPress={() => navigate('Impact')}>
          <Text style={styles.bangText}>   BANG!</Text>
        </TouchableOpacity> */}

      </View>
    )
  }
}

