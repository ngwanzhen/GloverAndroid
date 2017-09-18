import React, { Component } from 'react'
import { Text, View, StatusBar, Switch } from 'react-native'
import styles from '../styles/styles.js'

export default class Impact extends Component {
  constructor (props) {
    super(props)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.state = {
      seconds: 10,
      value: false
    }
  }

  goBack () {
    const { navigation } = this.props
    navigation.goBack()
    navigation.state.params.onSelect({ crash: false })
  }

  componentDidMount () {
    this.timer = setInterval(
      () => {
        if (this.state.seconds > 0) {
          this.setState({seconds: this.state.seconds - 1})
        }
      },
      1000
    )
  }

  componentDidUpdate () {
    if (this.state.value === true) {
      clearInterval(this.timer)
      this.goBack()
    } else if (this.state.seconds === 0) {
      this.props.navigation.navigate('profileWDrawer')
    }
  }

  render () {
    return (
      <View style={styles.impactContainer}>
        <StatusBar barStyle='light-content' />
        <Text style={styles.impactTitle}>
          IMPACT DETECTED
        </Text>
        <View style={styles.impactTimer}>
          <Text style={styles.impactText}>{this.state.seconds}</Text>
        </View>

        <View style={{flexDirection: 'row', zIndex: 1, marginVertical: 40}}>
          <Text style={styles.header}>
            Dismiss?
          </Text>
          <Switch
            style={{ marginLeft: 10 }}
            onTintColor={'#10377a'}
            thumbTintColor={'white'}
            value={this.state.value}
            onValueChange={(value) => this.setState({value})}
          />
        </View>
      </View>
    )
  }
}
