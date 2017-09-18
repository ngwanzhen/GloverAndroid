import React, { Component } from 'react'
import { Text, View, Platform, StatusBar, Image } from 'react-native'
import styles from '../styles/styles.js'
import MapView from 'react-native-maps'
import DrawerButton from '../DrawerButton'
import firebase from '../Firebase/firebase'
import SmsAndroid from 'react-native-sms-android'

const LATITUDE_DELTA = 0.015
const LONGITUDE_DELTA = 0.0121

export default class Profile extends Component {
  constructor () {
    super()
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      userDetails: {
        name: '',
        bloodType: '',
        allergy: '',
        emergencyContactName: '',
        emergencyContactNumber: ''
      }
    }
  }

  message (latitude, longitude) {
    if (Platform.OS === 'ios') {
      alert('Message can\'t be sent on ios!')
    } else if (Platform.OS === 'android') {
      SmsAndroid.sms(
        `+65 ${this.state.userDetails.emergencyContactNumber}`, // phone number to send sms to
        `${this.state.userDetails.name} had an accident! Blood Type: ${this.state.userDetails.bloodType}, Allergy: ${this.state.userDetails.allergy}, Location: http://www.google.com/maps/place/${latitude}+${longitude}`, // sms body
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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let uid = firebase.auth().currentUser.uid
        let rootRef = firebase.database().ref(`users/${uid}`)
        rootRef.once('value').then(snapshot => {
          this.setState({
            userDetails: {
              name: snapshot.val().name,
              bloodType: snapshot.val().bloodType,
              allergy: snapshot.val().allergy,
              emergencyContactName: snapshot.val().emergencyContactName,
              emergencyContactNumber: snapshot.val().emergencyContactNumber
            }
          })
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
              this.message(this.state.region.latitude, this.state.region.longitude)
            },
            (error) => alert(error.message),
            { enableHighAccuracy: false, timeout: 1000 }
          )
        })
      }
    })
  }

  render () {
    const { navigate } = this.props.navigation
    const { region } = this.props
    return (
      <View style={styles.profileContainer}>
        <StatusBar barStyle='light-content' />
        <DrawerButton onPress={() => navigate('DrawerOpen')} />

        <Image source={require('../../images/ambulance.gif')} style={styles.ambulanceLogo} />

        <View>
          <Text style={styles.titleBar}>Profile</Text>
          <Text style={{paddingLeft: 10, backgroundColor: '#EAEAEA'}}>
            {'\n'}Name: {this.state.userDetails.name}{'\n'}
            {'\n'}Blood Type: {this.state.userDetails.bloodType}{'\n'}
            {'\n'}Allergy: {this.state.userDetails.allergy}{'\n'}
            {'\n'}Emergency Contact Name: {this.state.userDetails.emergencyContactName}{'\n'}
            {'\n'}Emergency Contact Number: {this.state.userDetails.emergencyContactNumber}{'\n'}
          </Text>
          <Text style={styles.titleBar}>Location</Text>
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
