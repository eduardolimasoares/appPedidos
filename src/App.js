import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigator from './Navigator';

export default class App extends Component {

  render() {
    const Layout = Navigator;
    return <Layout />;
  }
}
