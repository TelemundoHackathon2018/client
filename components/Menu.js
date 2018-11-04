import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../nbctriv.png')}
          style={{ width: 150, height: 35 }}
        />
      );
    }
  }

class HomeScreen extends React.Component{
    static navigationOptions ={
      headerTitle: <LogoTitle />,
    };
    render(){
      return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Home Screen</Text>
            <Button
              title ="Go to Details"
              onPress={() => {this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here',
              })
              }}
            />
        </View>
      );
    }
  }