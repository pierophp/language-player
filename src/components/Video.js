
import NativeVideo from 'react-native-video';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

export default class Video extends Component {
  render() {
    return (
        <NativeVideo source={{uri: "file:///sdcard/jwbai_CHS_201604_01_r360P.mp4"}}   // Can be a URL or a local file.
            ref={(ref) => this.player = ref}
            resizeMode="contain"
            style={styles.backgroundVideo}
            />
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
