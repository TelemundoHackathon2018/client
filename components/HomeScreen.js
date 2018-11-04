import React, { Component } from 'react';
import {StyleSheet, View, AppRegistry, ScrollView, Image, TouchableHighlight} from 'react-native';
import {Button, Avatar, Text, SocialIcon, Badge, CheckBox} from 'react-native-elements';
import ImageSlider from 'react-native-image-slider';
import Carousel from 'react-native-carousel-view';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{alignItems: 'left', flexDirection: 'row'}}>
            <Text h4>Next Up...  </Text>
            <Badge containerStyle={{ backgroundColor: 'honeydew'}}>
              <Text h4 style={{fontWeight: "bold"}}>3:00 PM</Text>
            </Badge>
        </View>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={300}
            delay={2000}
            indicatorAtBottom={true}
            indicatorSize={20}
            indicatorText="•"
            indicatorColor="gray"
            >
            <View style={styles.contentContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Game')}>
                <Image
                  style={styles.stretch}
                  source={{uri: 'https://religionnews.com/wp-content/uploads/2018/03/The-Good-Place-promo-771x463.png'}}
                />
            </TouchableHighlight>
            </View>
            <View style={styles.contentContainer}>
              <Image
                style={styles.stretch}
                source={{uri: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/7305/production/_88954492_bbc_voicelogo.jpg'}}
              />
            </View>
            <View style={styles.contentContainer}>
                <Image
                  style={styles.stretch}
                  source={{uri: 'https://d1e5t59v5asibx.cloudfront.net/api/v1/web/image/content/dam/images/entertainment/shows/m/manifest/Manifest.png.2018-09-13T16:13:30+12:00.jpg'}}
                />
            </View>
          </Carousel>
        </View>
        <Text h2>My List</Text>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={300}
            animate={false}
            indicatorAtBottom={true}
            indicatorSize={20}
            indicatorOffset={20}
            indicatorText="•"
            indicatorColor="gray"
            >
            <View style={styles.contentContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Show')}>
                <Image
                  style={styles.stretch}
                  source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/91zRyX51tSL._RI_.jpg'}}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.contentContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Show')}>
                  <Image
                    style={styles.stretch}
                    source={{uri: 'https://img.nbc.com/sites/nbcunbc/files/files/images/2017/9/05/TheBlacklist-S5-ShowImage-1920x1080-KO.jpg'}}
                  />
              </TouchableHighlight>
            </View>
            <View style={styles.contentContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Show')}>
                <Image
                  style={styles.stretch}
                  source={{uri: 'https://img.nbc.com/sites/nbcunbc/files/files/images/2017/4/27/2015_0902_SNL-About-1920x1080-02_NW.jpeg'}}
                />
              </TouchableHighlight>
            </View>
          </Carousel>
        </View>
        <Text h2>Other Shows...</Text>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={300}
            animate={false}
            indicatorAtBottom={true}
            indicatorSize={20}
            indicatorOffset={20}
            indicatorText="•"
            indicatorColor="gray"
            >
            <View style={styles.contentContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Show')}>
                <Image
                  style={styles.stretch}
                  source={{uri: 'http://seriesemcena.com.br/wp-content/uploads/2016/02/law-and-order-svu-cast.jpg'}}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.contentContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Show')}>
                  <Image
                    style={styles.stretch}
                    source={{uri: 'https://pmcdeadline2.files.wordpress.com/2017/05/americas-got-talent-logo-2017.jpg?w=446&h=299&crop=1'}}
                  />
              </TouchableHighlight>
            </View>
            <View style={styles.contentContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Show')}>
                  <Image
                    style={styles.stretch}
                    source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/91TmR1v-qRL._RI_.jpg'}}
                  />
              </TouchableHighlight>
            </View>
          </Carousel>
        </View>

        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stretch: {
    width: 375,
    height: 300
  },
});

export default HomeScreen;
