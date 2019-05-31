import React from 'react';
import App, { Container } from 'next/app';
import UserContext from '../components/context';


class MyApp extends App {

  render() {
    const { Component } = this.props;

    const initialState = {
      user: {}
    };

    const reducer = (state, action) => {
      switch (action.type) {
        case 'changeTheme':
          return {
            ...state,
            theme: action.newTheme
          };

        default:
          return state;
      }
    };

    return (
      <Container>
        <UserContext.Provider value={initialState} reducer={reducer}>
          <Component {...this.props.children} />
        </UserContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
