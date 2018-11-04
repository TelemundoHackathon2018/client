import React, { Component } from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import {Button, Avatar, Text, SocialIcon, Badge, CheckBox} from 'react-native-elements';
import Video from 'react-native-video';

class GameScreen extends Component {
  static navigationOptions = {
    title: 'Trivia',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});



export default GameScreen;
