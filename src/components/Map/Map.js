import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class Map extends Component {
  render () {
    const { region } = this.props;
        console.log(region);

        return (
          <View style ={styles.container}>
            <MapView
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
          </View>
        );
      }
    }
