import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StatusBar, ScrollView, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

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

const LATITUDE = 1.3077426;
const LONGITUDE = 103.8318502;
const LATITUDE_DELTA = 0.015;
const LONGITUDE_DELTA = 0.0121;

export default class Map extends Component {
  constructor() {
  super();

  this.state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
  };
}

componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      });
    },
  (error) => console.log(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
  this.watchID = navigator.geolocation.watchPosition(
    position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
      });
    }
  );
}

componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchId);
}

  render () {
    const { region } = this.props;
        console.log(region);

        return (
          <View style ={styles.container}>
            <MapView
              style={styles.map}
              region={ this.state.region }
              onRegionChange={ region => this.setState({region}) }
              onRegionChangeComplete={ region => this.setState({region}) }
            >
            <MapView.Marker coordinate={ this.state.region }
            />
            </MapView>
          </View>
        );
      }
    }
