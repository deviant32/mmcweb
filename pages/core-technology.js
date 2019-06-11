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
        <title>Core Technology</title>
      </Head>
      <Header />
      <h1 className="h2 text-center text-primary font-weight-bold pt-5 pb-3 mt-4">Core Technology</h1>

      <CallToAction />
      <Footer />
    </Meta>
  );
}

export default Industries;
