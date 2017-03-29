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

import { NativeRouter, Route, Link } from 'react-router-native';

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
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link
              to="/"
              underlayColor='#f0f4f7'
              style={styles.navItem}>
                <Text>Home</Text>
            </Link>
            <Link
              to="/about"
              underlayColor='#f0f4f7'
              style={styles.navItem}>
                <Text>About</Text>
            </Link>
            <Link
              to="/video/teste"
              underlayColor='#f0f4f7'
              style={styles.navItem}>
                <Text>Video</Text>
            </Link>
          </View>

          <Route exact path="/" component={ListFiles}/>
          <Route path="/about" component={About}/>
          <Route path="/video/:filename" component={Video}/>
        </View>
      </NativeRouter>
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
