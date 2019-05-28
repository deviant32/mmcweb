import React from 'react';
import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import Home from '../components/views/home';


const HomePage = () => {
  return (
    <Meta>
      <Head>
        <title>MMC Web</title>
        <meta name="description" />
      </Head>
      <Header />
      <Home />
    </Meta>
  );
}

export default HomePage;
