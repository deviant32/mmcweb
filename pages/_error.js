import React from 'react';
import Router from 'next/router'


const _error = () => {
  return (
    <div />
  );
};

_error.getInitialProps = async ({ res, err }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/'
    })
    res.end()
  } else {
    Router.push('/')
  }
  return {}
};

export default _error;
