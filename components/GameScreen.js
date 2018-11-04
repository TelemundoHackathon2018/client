import React, { Component } from 'react';
import {View, Image, ScrollView, StyleSheet, Dimensions, WebView} from 'react-native';
import {Button, Avatar, Text, SocialIcon, Badge, CheckBox} from 'react-native-elements';
// import Video from 'react-native-video';
import { Asset, Video } from 'expo';


// const file = {{ uri: "https://embed.wirewax.com/8117523/" }};
// const videoAsset = Asset.fromModule(file);
// console.log(file);
class GameScreen extends Component {
  // static navigationOptions = {
  //   title: 'Trivia',
  // };
  // renderVideo () {
  //   const { width } = Dimensions.get('window');
  //     return(
  //       <WebView
  //         source={{ uri: "https://embed.wirewax.com/8117523/" }}
  //         // shouldPlay
  //         // resizeMode="cover"
  //         // style={{ width, height: 300 }}

  //       />
  //     )
  // }
  render() {
    return (
      <View style={{ height: 350}}>
        <WebView
          source = {{ uri: "https://embed.wirewax.com/8117523/" }}
          />
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
