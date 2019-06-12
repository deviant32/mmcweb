import React, { useState } from 'react';
import {
  Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label, Form, FormGroup, Row, Col
} from 'reactstrap';
import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';

const Industries = () => {

  return (
    <Meta>
      <Head>
        <title>Industries</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />
      </Head>
      <Header />
      <h1 className="h2 text-center text-primary font-weight-bold pt-5 pb-3 mt-4">Industries & Expertise</h1>

      <CallToAction />
      <Footer />
    </Meta>
  );
}

export default Industries;
