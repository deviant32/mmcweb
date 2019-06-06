import React from 'react';
import App, { Container } from 'next/app';

import UserProvider from '../components/hooks/user-provider';

class MyApp extends App {

  render() {
    const { Component } = this.props;

    return (
      <Container>
        <UserProvider>
          <Component {...this.props.children} />
        </UserProvider>
      </Container>
    );
  }
}
export default MyApp;
