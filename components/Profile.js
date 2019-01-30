import React from "react";
import { Platform, StatusBar, StyleSheet, View, Navigator } from "react-native";
import {
  Container,
  Header,
  Title,
  Thumbnail,
  Content,
  Input,
  InputGroup,
  Text,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Tabs,
  Tab
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content contentContainerStyle={{ flex: 1 }}>
        <Header>
          <Left>
            
          </Left>
          <Body>
            <Title>User Profile</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>
        <Grid>
          <Row size={25} style={{ justifyContent: "center" }}>
            {!this.props.userInfo.images[0].url ? (
              <Thumbnail
                circle
                source={require("../assets/spotify.png")}
                style={{ height: 192, width: 300, marginTop: 30 }}
              />
            ) : (
              <Thumbnail
                large
                source={{ uri: this.props.userInfo.images[0].url }}
                style={{ height: 150, width: 150, marginTop: 30 }}
              />
            )}
          </Row>
          <Row size={10} style={{ justifyContent: "center", marginTop: 25}}>
          <Button block dark>
            <Text>Edit Profile</Text>
          </Button>
          </Row>
          <Row size={10} style={{ justifyContent: "center", marginLeft: 55 }}>
            <Col>
            <Text style={{ fontWeight: "bold", fontSize: 8 }}>Followers</Text> 
            <Text>{this.props.userInfo.followers.total}</Text>
            </Col>
            <Col>
            <Text style={{ fontWeight: "bold", fontSize: 8 }}>Followers</Text> 
            <Text>{this.props.userInfo.followers.total}</Text>
            </Col>
            <Col>
            <Text style={{ fontWeight: "bold", fontSize: 8 }}>Followers</Text> 
            <Text>{this.props.userInfo.followers.total}</Text>
            </Col>
          </Row>
          <Row size={50} style={{ justifyContent: "center" }}>
          <Tabs initialPage={1}
          tabBarUnderlineStyle={{borderBottomColor: '#1ed760'}}>
                <Tab heading="Public Playlists">
                    <Text>Tab 1</Text>
                </Tab>
                <Tab heading="Recently Played">
                    <Text>Tab 2</Text>
                </Tab>
            </Tabs>
          </Row>
        </Grid>
      </Content>
    );
  }
}
