import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, AppRegistry, Image } from 'react-native';

export default class LandingPage extends Component {
  render() {
    return (
     <ScrollView> 
        <Text style= {styles.bigblack}> A-Z</Text>
        <Text style= {styles.bigblack}> The Good Place </Text>
        <Text> Option2</Text>
        <Text> Option3</Text>
      </ScrollView>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  bigblack: {
    color: 'white',
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontSize: 35,
  },
  options: {
    color: 'white',
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  }

});