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
  Item,
  Footer,
  Text,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Card,
  CardItem
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { WebBrowser, AuthSession } from "expo";

export default class Login extends React.Component {
  render() {
    console.log(this.props);
    return (
        <Content contentContainerStyle={{ flex: 2}}>
        <Header>
          <Body>
            <Title>
              <Text>Login</Text>
            </Title>
          </Body>
        </Header>
          <Grid style={{ marginTop: 50 }}>
            <Row size={1} style={{ justifyContent: "center" }}>
              <Thumbnail
                circle
                source={require("../assets/spotify.png")}
                style={{ height: 192, width: 300 }}
              />
            </Row>
            <Row size={0.2} style={{ justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 40 }}>
                Spotify Login
              </Text>
            </Row>
            <Row size={1.7} style={{ justifyContent: "center", paddingTop: 5 }}>
              <Button
                success
                style={{
                  width: 290,
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: "#50c72b"
                }}
                onPress={this.props.press}
              >
                <Text
                  style={{
                    paddingLeft: 60,
                    fontSize: 20,
                    paddingTop: 2,
                    color: "white"
                  }}
                >
                  Login with Spotify
                </Text>
                <Icon
                  style={{ paddingTop: 2, fontSize: 20, color: "#50c72b" }}
                />
              </Button>
            </Row>
          </Grid>
        </Content>
    );
  }
}
