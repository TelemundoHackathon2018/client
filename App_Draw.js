import React from 'react';
/*import {createStackNavigator} from 'react-navigation';
import ShowPage from './components/ShowPage';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';*/
import {DrawerNavigator} from 'react-navigation';
import {StyleSheet, Image, Button, View, Text} from 'react-native';

class MyHomeScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source = {require('./nbctrivia.png')}
        style = {(styles.icon)}
        />
    ),
  };

  render(){
    return(
      <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Page!</Text>
          <Button
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
            title ="DrawerOpen"
          />
      </View>
    );

  }
}

class MyNotificationsScreen extends React.Component{
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({tintColor}) => (
      <Image
        source = {require('./nbctrivia.png')}
        style = {(styles.icon)}
        />
    ),
  };

  render(){
    return(
      <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Page!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title ="Go Back Home"
          />
          <Button
            onPress={() => this.props.navigation.navigate(DrawerOpen)}
            title ="DrawerOpen"
          />
      </View>
    );

  };

}

const styles = StyleSheet.create({
   icon: {
     width: 24,
     height: 24,
   },
 });

 export default DrawerNavigator({
   Home: {screen:MyHomeScreen,},
   Notifications:{screen:MyNotificationsScreen,},
 },
  {
      drawerPosition: 'right',
      initialRouteName: 'Home',
      drawerBackgroundColor: 'orange',
      drawerWidth: 200,
  
 });

/*const RootStack = createStackNavigator(
  {
    ShowPage: {screen: ShowPage},
    LandingPage: {screen: LandingPage},
    ProfilePage: {screen: ProfilePage}
  },
  {
    initialRouteName: 'LandingPage',
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

export default RootStack;*/