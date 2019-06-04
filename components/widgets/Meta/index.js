import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default (props) => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  )
}


