/* eslint-disable no-console */
import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

// global styles
import '../styles/base.scss';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

Router.events.on('routeChangeComplete', url => {
  window.dataLayer.push({ event: 'pageview', url: url });
});

export default MyApp;
