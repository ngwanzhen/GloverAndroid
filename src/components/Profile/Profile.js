import React, { Component } from 'react'
import { Text, View, Platform, StatusBar } from 'react-native'
import styles from '../styles/styles.js'
import MapView from 'react-native-maps'
import DrawerButton from '../DrawerButton'
import firebase from '../Firebase/firebase'
import SmsAndroid from 'react-native-sms-android'

var userData

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var uid = firebase.auth().currentUser.uid
    var rootRef = firebase.database().ref(`users/${uid}`)
    rootRef.once('value').then(function (snapshot) {
      userData = snapshot.val()
    })
  }
})

const LATITUDE = 1.3077426
const LONGITUDE = 103.8318502
const LATITUDE_DELTA = 0.015
const LONGITUDE_DELTA = 0.0121

export default class Profile extends Component {
  constructor () {
    super()
    this.state = {
      message: false,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    }
  }

  iosMessage () {
    if (Platform.OS === 'ios') {
      alert('Message can\'t be sent on ios!')
    }
  }

  androidMessage (latitude, longitude) {
    if (Platform.OS === 'android') {
      SmsAndroid.sms(
        `+65 ${userData.emergencyContactNumber}`, // phone number to send sms to
        `${userData.name} had an accident! Blood Type: ${userData.bloodType}, Allergy: ${userData.allergy}, Location: http://www.google.com/maps/place/${latitude}+${longitude}`, // sms body
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
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        })
        this.iosMessage()
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        })
        this.androidMessage(this.state.region.latitude, this.state.region.longitude)
      }
    )
  }

  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchId)
  }

  render () {
    const { navigate } = this.props.navigation
    const { region } = this.props
    return (
      <View style={styles.container}>
        <DrawerButton onPress={() => navigate('DrawerOpen')} />
        <StatusBar barStyle='dark-content' />

        <View style={styles.profileContainer}>
          <Text>Hello</Text>
        </View>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={this.state.region}
            onRegionChange={region => this.setState({region})}
            onRegionChangeComplete={region => this.setState({region})}
          >
            <MapView.Marker coordinate={this.state.region}
          />
          </MapView>
        </View>
      </View>
    )
  }
}
