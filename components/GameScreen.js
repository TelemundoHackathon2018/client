import React, { Component } from 'react';
import {View, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Button, Avatar, Text, SocialIcon, Badge, CheckBox} from 'react-native-elements';
import { Video } from 'expo';

class GameScreen extends Component {
  // static navigationOptions = {
  //   title: 'Trivia',
  // };
  renderVideo () {
    const { width } = Dimensions.get('window');
      return(
        <Video
          source={{ uri: 'https://embed.wirewax.com/8011338/' }}
          shouldPlay
          resizeMode="cover"
          style={{ width, height: 300 }}

        />
      )
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
        {this.renderVideo()}
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
