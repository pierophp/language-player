import React, { Component } from 'react';
import RNFetchBlob from 'react-native-fetch-blob'
import { Container, Content, Left, Body, Right, ListItem, Text, Icon, Switch } from 'native-base';

// const filesPath = '/sdcard/';
// const filesPath = '/storage/3A48-1BFD/Android/data/org.jw.jwlibrary.mobile/files/';
// const filesPath = '/sdcard/Android/data/org.jw.jwlibrary.mobile/files/';
const dirs = RNFetchBlob.fs.dirs;
const filesPath = dirs.DCIMDir;

export default class ListFiles extends Component {
  constructor(props){
    super(props);
    this.state = {
        list: [],
    };
  }
  componentDidMount() {

    RNFetchBlob.fs.ls(filesPath)
      .then((result) => {
          console.log(result);
          const list = result.filter((item) => item.substr(-3) === 'mp4');
          // const list = result.filter((item) => item.name.substr(-3) === 'mp4');
          this.setState({ list });

          // stat the first file
          // return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      });
    /*
    RNFS.readDir(filesPath)
    .then((result) => {
        const list = result.filter((item) => item.name.substr(-3) === 'mp4');
        // const list = result.filter((item) => item.name.substr(-3) === 'mp4');
        this.setState({ list });

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    });
    */
  }

  renderListItem(item, i) {
    //
    return (
        <ListItem icon key={i}>
            <Left>
                <Icon name="plane" />
            </Left>
            <Body>
                <Text>{item}</Text>
            </Body>
            <Right>
                <Switch value={true} />
            </Right>
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
