/* eslint-disable no-console */
import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

// global styles
import '../styles/base.scss';

import { Wrapper, UserProvider } from '../components';

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

Router.events.on('routeChangeComplete', url => {
  window.dataLayer.push({ event: 'pageview', url: url });
});

export default MyApp;
