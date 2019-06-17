import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import '../styles/base.scss';


export default class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Description goes here!  Yay for better SEO." />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
          <link rel="stylesheet" href="https://use.typekit.net/vfc3wum.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
