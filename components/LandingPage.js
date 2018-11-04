import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, AppRegistry, Image, View } from 'react-native';
import HeaderBar from "./HeaderBar";

export default class LandingPage extends Component {
  render() {
    return (
      <View>
        <HeaderBar />
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  bigblack: {
    color: 'black',
    backgroundColor: 'navy',
    fontWeight: 'bold',
    fontSize: 35,
  },
  options: {
    color: 'white',
    backgroundColor: 'navy',
    fontWeight: 'bold',
    fontSize: 25,
  }

});