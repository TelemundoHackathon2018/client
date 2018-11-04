// Header.js
import React, {Component} from 'react';
import {StyleSheet, View, Text, AppRegistry, Image, Header } from 'react-native';

class HeaderBar extends Component {
  render() {
    return (
     <View style={styles.container}> 
        <Image style={styles.bigblack} source={{uri: "https://github.com/TelemundoHackathon2018/client/blob/master/nbctriv.png?raw=true"}} />
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
    width: 250, 
    height: 60,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'navy',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 60,
  },
});
export default Header;