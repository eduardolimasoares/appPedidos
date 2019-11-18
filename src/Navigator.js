import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './pages/SplashScreen'
import ScreenMap from './pages/ScreenMap'

// console.disableYellowBox = true;

const AppNavigator = createSwitchNavigator(
  {
    SplashScreen: SplashScreen,
    ScreenMap:ScreenMap
  },
    {initialRouteName: 'SplashScreen',}

);

export default createAppContainer(AppNavigator);
