import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import '../styles/base.scss';


export default class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
          <link href="/static/fonts/agenda/style.css" rel="stylesheet" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
