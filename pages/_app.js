/* eslint-disable no-console */
import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

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

Router.events.on('beforeHistoryChange', url => {
  window.dataLayer.push({ event: 'pageview', url: url });
});

export default MyApp;
