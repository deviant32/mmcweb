import React from 'react';
import Head from 'next/head';
import Header from '../components/views/partials/header';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';
import Title from '../components/views/partials/title';

const Industries = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Industries</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />
      </Head>
      <Header />
      <Title>Industries & Expertise</Title>

      <CallToAction />
      <Footer />
    </React.Fragment>
  );
}

export default Industries;
