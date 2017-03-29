
import NativeVideo from 'react-native-video';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

// export default class Video extends Component {
export default ({match}) => {
 // render(props) {
    console.log(match.params.filename);
    return (
        <NativeVideo source={{uri: "file:///sdcard/" + match.params.filename}}   // Can be a URL or a local file.
            ref={(ref) => this.player = ref}
            resizeMode="contain"
            style={styles.backgroundVideo}
            />
    );
//  }
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
