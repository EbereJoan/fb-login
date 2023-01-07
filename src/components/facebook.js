/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userId:  "",
        name: "",
        email: "",
        picture: "",
    }

    responsefacebook = response => {
        console.log("response");
    }

    componentClicked = () => console.log("clicked");



  render() {
    let fbContent;

    if(this.state.isLoggedIn) {
        fbContent = null;
    } else {
        fbContent = (<FacebookLogin
        appId="1078860653512536"
        autoLoad={true}
        fields="name,email,picture"
        onCl ick={this.componentClicked}
        callback={this.responsefacebook} />);
    }


    return (
      <div>
        {fbContent}
      </div>
    )
  }
}

