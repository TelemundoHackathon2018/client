import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {Button, Avatar, SocialIcon, Text, Badge, CheckBox} from 'react-native-elements';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: '1'}}>
          <Badge containerStyle={{ backgroundColor: 'honeydew'}}>
            <Text  style={{fontWeight: "bold"}}>Played: 10</Text>
          </Badge>
            <Avatar
              xlarge
              rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <Badge containerStyle={{ backgroundColor: 'honeydew'}}>
              <Text style={{fontWeight: "bold"}}>Won: 8</Text>
            </Badge>
        </View>
        <Text h2>TazCrispy</Text>
        <View style={{alignItems: 'left', flexDirection: 'row'}}>
            <Text h4>Points: </Text>
            <Badge
              value={3}
              textStyle={{ color: 'orange' }}
            />
        </View>
        <Text h4>Favorite Shows:</Text>
        <View style={{alignItems: 'left', flexDirection: 'row'}}>
            <CheckBox
              title='The Good Place'
              checked={true}
            />
            <CheckBox
              title='The Boys'
              checked={true}
            />
        </View>
        <Button
          rounded
          backgroundColor='orange'
          title='History'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <View style={{flexDirection: 'row'}}>
            <SocialIcon type='twitter'/>
            <SocialIcon type='facebook'/>
            <SocialIcon type='instagram'/>
            <SocialIcon type='youtube'/>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
