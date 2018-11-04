import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, AppRegistry, Image } from 'react-native';

export default class LandingPage extends Component {
  render() {
    return (
     <ScrollView> 
        <Image style={styles.bigblack} source={{uri: "https://github.com/TelemundoHackathon2018/client/blob/master/nbctriv.png?raw=true", width: 250, height: 60}} />
      </ScrollView>
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