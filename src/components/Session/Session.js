import React, { Component } from 'react'
import { Text, View, Image, StatusBar, Switch } from 'react-native'
import styles from '../styles/styles.js'
import DrawerButton from '../DrawerButton'

export default class Session extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: false
    }
  }

  render () {
    const { navigate } = this.props.navigation
    let containerStyle = this.state.value ? styles.endSessionContainer : styles.startSessionContainer
    let bgImage = this.state.value ? require('../../images/cyclist.gif') : require('../../images/bicycle.gif')
    let content = this.state.value ? 'End This Session?' : 'Start New Session?'

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
            style={{marginLeft: 10}}
            onTintColor={'#8b1e7d'}
            thumbTintColor={'white'}
            value={this.state.value}
            onValueChange={(value) => this.setState({value})}
          />
        </View>
      </View>
    )
  }
}
