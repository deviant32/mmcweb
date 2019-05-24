import React from 'react';

import Head from 'next/head';
import { mapGlobals } from '../utils/helperFuncs';
import Meta from '../components/widgets/Meta';
import Page from '../components/views/page'
import Header from '../components/views/partials/header'
import Footer from '../components/views/partials/footer'
import Request from '../utils/request';

class DynamicPage extends React.Component {

  static async getInitialProps({ query }) {
    const Response = await Request.getGlobals();
    const pageResponse = await Request.getObject(query.pagename);
    const page = pageResponse.object;
    const globals = mapGlobals(Response.objects);
    return { globals, page };
  }

  constructor(props) {
    super(props);
    this.state = {
      header: props.globals.header,
      page: props.page
    }
  }

  render() {
    const { header, page } = this.state;
    return (
      <Meta>
        <Head>
          <title>Medical Professional ~ Cosmic JS Next Js App</title>
          <meta name="description" content={page.metadata.seo_description.value} />
          <link rel="icon" type="image/png" href={`${header.metadata.favicon.imgix_url}?w=32`} sizes="32x32" />
          <link rel="icon" type="image/png" href={`${header.metadata.favicon.imgix_url}?w=16`} sizes="16x16" />
        </Head>
        <Header header={header} />
        <Page page={page} />
      </Meta>
    );
  }
}

export default DynamicPage;
