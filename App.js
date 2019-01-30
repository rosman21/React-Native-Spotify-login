import React from 'react';
import { Container, Header, Title, Thumbnail, Content, Input, InputGroup, Item, Footer, Text, FooterTab, Button, Left, Right, Body, Card, CardItem } from 'native-base';
import { AuthSession } from 'expo';
import Login from './components/Login'
import Profile from './components/Profile'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    console.log(redirectUrl);

    let result = await AuthSession.startAsync({
      authUrl: "http://localhost:8888/auth/spotify"
    });
    
    if (result.type !== "success") {
      alert("Uh oh, something went wrong");
      return;
    }

    let userInfoResponse = await fetch(
      `http://localhost:8888/callback?code=${result.params.code}`
    );
    const userInfo = await userInfoResponse.json();
    //console.log(userInfo)
    this.setState({ 
      user: userInfo.user._json 
    });
  };

  render() {
    return (
      <Container>
      {!this.state.user ? (
        <Login 
        press={this.handleSubmit.bind(this)}
        />
      ) : (
        <Profile userInfo={this.state.user}/>
      )} 
      </Container>
    );
  }
}


