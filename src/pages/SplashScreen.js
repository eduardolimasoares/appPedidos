import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import ScreenMap from './ScreenMap'


const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50
      },
    texto:{
        fontSize:30
    }
});

export default class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('ScreenMap');
    }, 3000);
  };
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Splash Screen</Text>
        </View>
    );
  }
}

