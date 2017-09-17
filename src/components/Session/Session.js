import React, {
  Component
} from 'react'
import {
  Text,
  View,
  Image,
  StatusBar,
  Switch,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import styles from '../styles/styles.js'
import DrawerButton from '../DrawerButton'
import Toast from '@remobile/react-native-toast'
import BluetoothSerial from 'react-native-bluetooth-serial'
import Impact from './Impact'

const DeviceList = ({ devices, connectedId, showConnectedIcon, onDevicePress }) =>
  <ScrollView style={styles.container}>
    <View style={styles.listContainer}>
      {devices.map((device, i) => {
        return (
          <TouchableHighlight
            underlayColor='#DDDDDD'
            key={`${device.id}_${i}`}
            style={styles.listItem} onPress={() => onDevicePress(device)}>
            <View style={{ flexDirection: 'row' }}>
              {showConnectedIcon
              ? (
                <View style={{ width: 48, height: 48, opacity: 0.4 }}>
                  {connectedId === device.id
                  ? (
                    <Image style={{ resizeMode: 'contain', width: 24, height: 24, flex: 1 }} source={require('../imgs/ic_done_black_24dp.png')} />
                  ) : null}
                </View>
              ) : null}
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>{device.name}</Text>
                <Text>{`<${device.id}>`}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )
      })}
    </View>
  </ScrollView>

export default class Session extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: false,
      isEnabled: false,
      discovering: false,
      devices: [],
      unpairedDevices: [],
      connected: false,
      section: 0,
      crash: false
    }
  }

  componentDidMount () {
    Promise.all([
      BluetoothSerial.isEnabled(),
      BluetoothSerial.list()
    ])
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
  }

  /**
   * Connect to bluetooth device by id
   * @param  {Object} device
   */
  connect (device) {
    this.setState({
      connecting: true
    })
    BluetoothSerial.connect(device.id)
      .then((res) => {
        Toast.showShortBottom(`Connected to device ${device.name}`)
        this.setState({
          device,
          connected: true,
          connecting: false
        })
      })
      .catch((err) => Toast.showShortBottom(err.message))
  }

  disconnect () {
    BluetoothSerial.disconnect()
      .then(() => this.setState({
        connected: false
      }))
      .catch((err) => Toast.showShortBottom(err.message))
  }

  onDevicePress (device) {
    this.connect(device)
    this.setState({ value: true })
    setInterval(() => {
      BluetoothSerial.readFromDevice()
    .then((data) => {
      if (data) {
        Toast.showShortBottom(data)
        this.setState({crash: true})
        // this.props.navigation('Impact')
      }
    })
    .catch((err) => { console.log(err) })
    }, 3000)
  }

  render () {
    const {
      navigate
    } = this.props.navigation
    let containerStyle = this.state.value ? styles.endSessionContainer : styles.startSessionContainer
    let bgImage = this.state.value ? require('../../images/cyclist.gif') : require('../../images/bicycle.gif')
    let content = this.state.value ? 'End This Session?' : 'Start New Session?'
    let bangDisplay = this.state.value ? 'flex' : 'none'

    let show = this.state.crash ?  <Impact navigation={this.props.navigation}/> :
    <View style={containerStyle}>
        <StatusBar barStyle='dark-content' />
        <DrawerButton onPress={() => navigate('DrawerOpen')} />

        <Image source={bgImage} style={styles.sessionLogo} />

        <View style={{flexDirection: 'row', zIndex: 1}}>
          <Text style={styles.header}>
            {content}
          </Text>

          <DeviceList
            showConnectedIcon={this.state.section === 0}
            connectedId={this.state.device && this.state.device.id}
            devices={this.state.devices}
            onDevicePress={(device) => this.onDevicePress(device)} />

          <Switch
            style={{marginLeft: 10}}
            onTintColor={'#8b1e7d'}
            thumbTintColor={'white'}
            value={this.state.value}
            onValueChange={(value) => this.setState({value})}
          />
        </View>

        <TouchableOpacity
          style={{ zIndex: 1, display: bangDisplay }}
          onPress={() => this.setState({crash: true})}>
          <Text style={styles.bangText}>   BANG!</Text>
        </TouchableOpacity>
        </View>

    return (
      <View style={styles.impactContainer}>
        {show}
      </View>
    )
  }
}
