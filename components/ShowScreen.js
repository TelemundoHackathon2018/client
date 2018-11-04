import React, { Component } from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import {Button, Avatar, Text, SocialIcon, Badge, CheckBox} from 'react-native-elements';
import Timeline from 'react-native-timeline-listview'

class ShowScreen extends Component {
  static navigationOptions = {
    title: 'Show Info',
  };
  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Episode 5', description: 'New Episode 5'},
      {time: '10:45', title: 'Episode 5', description: 'Episode 5 Rep'},
      {time: '12:00', title: 'Episode 4', description: 'Last Episode Rep'},
    ]
  };
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1}}>
      <View>
        <Image
          style={{width: 375, height: 300}}
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/91zRyX51tSL._RI_.jpg'}}
        />
      </View>
        <Text h4>Genre: Comedy-Drama</Text>
        <View style={{alignItems: 'left', flexDirection: 'row'}}>
            <Text h4>Rating: </Text>
            <Badge containerStyle={{ backgroundColor: 'honeydew'}}>
              <Text h4 style={{fontWeight: "bold"}}>90%</Text>
            </Badge>
        </View>
        <View style={styles.container}>
        <Text h4>Today's Schedule: </Text>
          <Timeline
            style={styles.list}
            data={this.data}
          />
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
		paddingTop:10,
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});

export default ShowScreen;
