import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';

export default class ProfilePage extends Component {
  static navigationOptions = {
    title: 'NBSee',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top' }}>
        <Text>Profile</Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://i.ytimg.com/vi/AZ2ZPmEfjvU/maxresdefault.jpg'}}
        />
        <Text >Profile</Text>
        <Button
          title="Information:"
          color="#841584"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Law & Order"
          color="#841584"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="The Good PLace"
          color="#841584"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}