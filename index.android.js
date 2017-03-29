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

// import Video from './src/components/Video';
import ListFiles from './src/components/ListFiles';

export default class LanguagePlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListFiles/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('LanguagePlayer', () => LanguagePlayer);
