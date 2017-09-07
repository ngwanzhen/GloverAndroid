import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../styles/styles.js'
import firebase from '../Firebase/firebase'
import t from 'tcomb-form-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const userIcon = (<Icon name='face-profile' size={20} />)

// Material Design Style Underlines
var _ = require('lodash')
const stylesheet = _.cloneDeep(t.form.Form.stylesheet)
stylesheet.textbox.normal.borderWidth = 0
stylesheet.textbox.error.borderWidth = 0
stylesheet.textbox.normal.marginBottom = 0
stylesheet.textbox.error.marginBottom = 0
stylesheet.textboxView.normal.borderWidth = 0
stylesheet.textboxView.error.borderWidth = 0
stylesheet.textboxView.normal.borderRadius = 0
stylesheet.textboxView.error.borderRadius = 0
stylesheet.textboxView.normal.borderBottomWidth = 1
stylesheet.textboxView.error.borderBottomWidth = 1
stylesheet.textbox.normal.marginBottom = 5
stylesheet.textbox.error.marginBottom = 5

var bloodType = t.enums({
  'O+': 'O+',
  'O-': 'O-',
  'A+': 'A+',
  'A-': 'A-',
  'B+': 'B+',
  'B-': 'B-',
  'AB+': 'AB+',
  'AB-': 'AB-'
})

var Details = t.struct({
  name: t.String,
  // birthday: t.Date,
  bloodType: bloodType,
  allergy: t.String,
  emergencyContactName: t.String,
  emergencyContactNumber: t.Number
})

var options = {
  stylesheet: stylesheet,
  fields: {
    birthday: {
      config: {
        format: (date) => {
          const formatedDate = moment(date).format('DD MMMM YYYY')
          return formatedDate
        }
      }
    }
  }
}

export default class CreateProfile extends Component {
  onPress () {
    var value = this.refs.form.getValue()
    if (value) {
      var uid = firebase.auth().currentUser.uid
      const rootRef = firebase.database().ref(`users/${uid}`)
      rootRef.child('name').set(value.name)
      // rootRef.child('birthday').set(value.birthday)
      rootRef.child('bloodType').set(value.bloodType)
      rootRef.child('allergy').set(value.allergy)
      rootRef.child('emergencyContactName').set(value.emergencyContactName)
      rootRef.child('emergencyContactNumber').set(value.emergencyContactNumber)

      .then(() => this.props.navigation.navigate('Session'))
    }
  }

  render () {
    var Form = t.form.Form
    return (

      <KeyboardAwareScrollView
        style={{ backgroundColor: '#6ed3cf' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>

          <View style={styles.container}>
            <StatusBar barStyle='light-content' />

            <View style={styles.headerContainer}>
              <Text style={styles.header}>
                {userIcon} Create Profile
              </Text>
            </View>

            <View style={styles.formContainer}>
              <Form ref='form' type={Details} options={options} />

              <TouchableOpacity onPress={() => this.onPress()} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}
