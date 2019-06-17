/* eslint-disable no-console */
import React from 'react';
import App, { Container } from 'next/app';
import ReactGA from 'react-ga';
import Router from 'next/router';
import TagManager from 'react-gtm-module'


import UserProvider from '../components/hooks/user-provider';

class MyApp extends App {

  componentDidMount() {
    console.log('App mounted.. Init GA');
    TagManager.initialize({
      gtmId: 'GTM-MB79W62'
    })

    /*  ReactGA.initialize('UA-50851079-66', {
       debug: true,
       titleCase: false
     }); */
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
