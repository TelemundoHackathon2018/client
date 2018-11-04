import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ShowScreen from './components/ShowScreen';
import ProfileScreen from './components/ProfileScreen';
import GameScreen from './components/GameScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Profile: ProfileScreen,
    Game: GameScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'navy',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
