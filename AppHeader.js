// import React from 'react';
// import {StackNavigator} from 'react-navigation';
// import {DrawerNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation';
// import ShowPage from './components/ShowPage';
// import LandingPage from './components/LandingPage';
// import ProfilePage from './components/ProfilePage';
// import {StyleSheet, Button, Image, View, Text} from 'react-native';

import {StackNavigator} from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';
import ShowPage from './components/ShowPage';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, Button} from 'react-native';

export default class App extends React.Component{
  render() {
    return(
      <AppDrawerNavigator/>
    );
  }
}

  const AppDrawerNavigator = DrawerNavigator({
    ProfilePage: {screen: ProfilePage},
    ShowPage: {screen: ShowPage},
    LandingPage: {screen: LandingPage},
    ProfilePage: {screen: ProfilePage}
  })

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  });


// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('./nbctriv.png')}
//         style={{ width: 150, height: 35 }}
//       />
//     );
//   }
// }

// class HomeScreen extends React.Component{
//   static navigationOptions ={
//     headerTitle: <LogoTitle />,
//   };
//   render(){
//     return(
//       <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Home Screen</Text>
//           <Button
//             title ="Go to Details"
//             onPress={() => {this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'anything you want here',
//             })
//             }}
//           />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component{
//   static navigationOptions =({navigation, navigationOptions}) => {
//     const {params} = navigation.state;
//     return {
//       title: params ? params.otherParam: 'A Nested Details Screen',
//     }
//   };
//   render(){
//     return(
//       <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Details Screen</Text>
//           <Button
//             onPress={() => this.props.navigation.goBack()}
//             title ="Go Back"
//           />
//       </View>
//     );

//   };

// }

// const RootStack = StackNavigator(
//   // {
//   //   Home: {screen:HomeScreen,},
//   //   Details:{screen:DetailsScreen,},
//   // },
//   {
//     navigationOptions:{
//       headerStyle:{
//         backgroundColor: 'navy'
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle:{
//         fontWeight: 'bold',
//       },
//     },
//     // initialRouteName: 'Home',
//   }
// );

// export default class App extends React.Component{
//   render(){
//     return <RootStack />;
//   }
// }