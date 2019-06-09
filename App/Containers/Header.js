import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
     
        <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Events', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
     
    );
  }
}

