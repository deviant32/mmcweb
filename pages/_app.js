import React from 'react';
import App, { Container } from 'next/app';

import UserProvider from '../components/hooks/user-provider';
import Wrapper from '../components/hooks/wrapper';

class MyApp extends App {

  render() {
    const { Component } = this.props;

    return (
      <Container>
        <UserProvider>
          <Wrapper>
            <Component {...this.props.children} />
          </Wrapper>
        </UserProvider>
      </Container>
    );
  }
}
export default MyApp;
