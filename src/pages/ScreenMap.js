import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions  } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
import {request, PERMISSIONS} from 'react-native-permissions'
const { height, width} = Dimensions.get('screen')


const styles = StyleSheet.create({
  container : {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
  map: {
    height: height * 0.78,
    width: width * 0.95,
    backgroundColor: '#000'
  }
});

export default class ScreenMap extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      markers: [],
      coordinates: [],
    }
  }

  componentDidMount(){
    this.requestLocationPermission()
  }
  
  requestLocationPermission = async() => {
    var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    console.log('Android' + response)
    if (response === 'granted') {
      this.locateCurrentPosition()
    }
  }
  
  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(JSON.stringify(position.coords.latitude))
        // console.log(JSON.stringify(position.coords.longitude))

        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }
        this.setState({ initialPosition });
        console.log('Initial é o ' + this.state.initialPosition.latitude)
      },
      // error => Alert.alert(error.message),
      // enableHighAccuracy: true, timeout: 10000, maximumAge: 1000
    )
  }

  

  render() {
    return (
      <View style={styles.container}>
        <MapView 
        showsUserLocation={true}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={this.state.initialPosition}
        >
          {/* <Marker
            coordinate={{
              latitude: -1.456194,
              longitude: -48.480530,
            }}
            title={'Byhand Entregas'}
          ></Marker> */}
        </MapView>
      </View>
    );
  }
}
