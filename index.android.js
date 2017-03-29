/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import Video from './src/components/Video';
import ListFiles from './src/components/ListFiles';

const About = () => (
  <Text style={styles.header}>
    About
  </Text>
)

export default class LanguagePlayer extends Component {
  render() {
    return (
      <Router>
         <Scene key="root">
          <Scene key="video" component={Video} title="Video"/>
          <Scene key="about" component={Register} title="About"/>
          <Scene key="home" component={ListFiles}/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
});

AppRegistry.registerComponent('LanguagePlayer', () => LanguagePlayer);
