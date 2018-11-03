import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ShowPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Show Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
