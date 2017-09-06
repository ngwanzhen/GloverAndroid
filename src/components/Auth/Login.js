import React, { Component } from 'react'
import { Text, View, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar } from 'react-native'
// import styles from '../styles/styles.js'
import firebase from '../Firebase/firebase'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  _auth () {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Profile'))
    .catch(function (error) {
      alert(error.message)
    })
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />

          <View style={styles.logoContainer}>
            <Image source={require('../../images/logo.gif')} style={styles.logo} />
            <Text style={styles.title}>
              Project Title
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
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Register')}>
              <Text style={styles.otherText}>No account yet? Create one</Text>
            </TouchableOpacity>

          </View>

        </View>
      </KeyboardAvoidingView>
    )
  }
}
