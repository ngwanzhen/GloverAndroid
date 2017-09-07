import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../styles/styles.js'
import firebase from '../Firebase/firebase'

export default class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  _auth () {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('CreateProfile'))
    .catch(function (error) {
      alert(error.message)
    })
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: '#6ed3cf' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}>
          <StatusBar barStyle='light-content' />

          <View style={styles.logoContainer}>
            <Image source={require('../../images/logo.gif')} style={styles.logo} />
            <Text style={styles.title}>
              Glover
            </Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder='email'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              style={styles.input}
              placeholder='password'
              placeholderTextColor='rgba(0,0,0,0.6)'
              returnKeyType='done'
              secureTextEntry
              ref={(input) => this.passwordInput = input}
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity
              onPress={() => this._auth()}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Login')}>
              <Text style={styles.otherText}>Already a member? Login</Text>
            </TouchableOpacity>

          </View>

        </KeyboardAwareScrollView>

    )
  }
}
