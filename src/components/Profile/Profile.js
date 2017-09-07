import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
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

  message (latitude, longitude) {
<<<<<<< HEAD
=======
    alert('hello')
>>>>>>> f618fde
    if (Platform.OS === 'ios') {
      alert('Message can\'t be sent on ios!')
    } else {
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
<<<<<<< HEAD
        this.message(this.state.region.latitude, this.state.region.longitude)
=======
>>>>>>> f618fde
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
<<<<<<< HEAD
=======
        this.message(this.state.region.latitude, this.state.region.longitude)
>>>>>>> f618fde
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
        <View style={styles.mapContainer}>
          <DrawerButton onPress={() => navigate('DrawerOpen')} />
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
        <Text>{this.state.region.latitude}</Text>
      </View>
    )
  }
}
