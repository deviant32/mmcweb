/* eslint-disable no-console */
import React from 'react';
import App, { Container } from 'next/app';
import ReactGA from 'react-ga';
import Router from 'next/router';
import TagManager from 'react-gtm-module';
import getConfig from 'next/config';

import UserProvider from '../components/hooks/user-provider';

const { publicRuntimeConfig } = getConfig();
const { GOOGLE_ANALYTICS, GOOGLE_TAGS } = publicRuntimeConfig;

class MyApp extends App {

  componentDidMount() {
    // initialize tag manager
    // TODO: use env variable in azure
    TagManager.initialize({
      gtmId: GOOGLE_TAGS
    })

    // initialize google analytics
    // TODO: use env variable in azure
    ReactGA.initialize(GOOGLE_ANALYTICS, {
      debug: true,
      titleCase: false
    });
  }

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

Router.events.on('routeChangeComplete', url => ReactGA.pageview(url));

export default MyApp;
