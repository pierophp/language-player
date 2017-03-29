import React, { Component } from 'react';
import {
  View
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
import { Container, Content, Left, Body, Right, ListItem, Text, Thumbnail, Switch } from 'native-base';
import { Link } from 'react-router-native';

const filesPath = '/sdcard/';
// const filesPath = '/storage/3A48-1BFD/Android/data/org.jw.jwlibrary.mobile/files/';
// const filesPath = '/sdcard/Android/data/org.jw.jwlibrary.mobile/files/';
const dirs = RNFetchBlob.fs.dirs;
// const filesPath = dirs.DCIMDir;

export default class ListFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
    };
  }
  componentDidMount() {

    RNFetchBlob.fs.ls(filesPath)
      .then((result) => {
          const list = result.filter((item) => item.substr(-3) === 'mp4');
          // const list = result.filter((item) => item.name.substr(-3) === 'mp4');
          this.setState({ list });

          // stat the first file
          // return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      });
  }

  renderListItem(item, i) {
    // const link = "/video/" + item;
    const link = "/video/d";
    return (
        <ListItem avatar key={i}>
          <Left>
            <Thumbnail source={require('./img/one.png')} />
          </Left>
          <Body>
            <View>
              <Link to="/video/teste">
                  <Text>{item}</Text>
              </Link>
            </View>
          </Body>
        </ListItem>
    )
  }

  render() {
    return (
      <Container>
        <Content>
          {this.state.list.map(this.renderListItem)}
        </Content>
      </Container>
    );
  }
}
