import React from 'react';
import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import Home from '../components/views/home';
import Keycode from '../components/views/partials/keycode';
import Footer from '../components/views/partials/footer';


const HomePage = () => (
  <Meta>
    <Head>
      <title>MMC Web</title>
      <meta name="description" />
    </Head>
    <Keycode />
    <Header />
    <Home />
    <Footer />
  </Meta>
)

export default HomePage;
