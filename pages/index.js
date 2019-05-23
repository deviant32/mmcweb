import React from 'react';
import Head from 'next/head';
import { mapGlobals, mapHome } from '../utils/helperFuncs';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import Request from '../utils/request';
import Home from '../components/views/home';


class HomePage extends React.Component {

  static async getInitialProps() {
    const Response = await Request.getGlobals();
    const homeResponse = await Request.getObject('home');
    const home = mapHome(homeResponse.object);
    const globals = mapGlobals(Response.objects);
    return { globals, home };
  }

  constructor(props) {
    super(props);
    this.state = {
      header: props.globals.header,
      home: props.home
    }
  }

  render() {
    const { header, home } = this.state;

    return (
      <Meta>
        <Head>
          <title>MMC Web</title>
          <meta name="description" content={home.seo_description.value} />
        </Head>
        <Header header={header} />
        <Home {...home} />
      </Meta>
    );
  }
}

export default HomePage;
