/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import Router from 'next/router'
import ReactMapGL from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import Head from 'next/head';

import { Header, Footer } from '../components/partials';
import { Title, TitleBlock } from '../components';


library.add(fab)


const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData(event.target);

    let jsonObject = {};

    for (const [key, value] of data.entries()) {
      jsonObject[key] = value;
    }

    axios({
      method: 'post',
      url: 'https://prod-77.eastus.logic.azure.com:443/workflows/5a2c751e755b438eb52f51894cdea4fe/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Gbl7Ir-9oj2-6MSuZpl3BlXHlDZqrNj4ZCktHX8GHZ4',
      data: jsonObject,
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      // eslint-disable-next-line no-unused-vars
      .then((response) => { })
      .catch(() => { })
      .finally(() => { });

    // go straight to the thank you page regardless
    Router.replace('/thank-you');
  }

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 500,
    latitude: 42.102740,
    longitude: -75.832630,
    zoom: 11,
    scrollZoom: false,
    boxZoom: false,
    doubleClickZoom: false
  });

  useEffect(() => {
    // set the width to 100% just to keep it responsive
    const handleResize = () => setViewport({ ...viewport, ...{ width: '100%' } });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  return (
    <React.Fragment>
      <Head>
        <title>Email Exclusion | Modern Marketing & Commerce: MMC</title>
        <meta
          name="description"
          content="Whether you’re a prospective client, a future team member, or just want to learn more about what we do, we’d love to hear from you!"
        />
        <meta
          name="robots"
          content="index,follow"
        />
      </Head>
      <Header />
      <Container style={{minHeight: 400}}>
        <Row className="mt-5 pb-5">
          <Col className="pl-5 pr-5 mt-5">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <p>If you no longer wish to receive marketing messages from Modern Marketing & Commerce, you can remove your email address here:</p>
             
              <Row className="mt-3" form>
                <Col className="mb-0" md={6}>
                  <FormGroup>
                    <Label for="first_name">Email Address</Label>
                    <Input required type="email" name="email" id="email" placeholder="Email" />
                  </FormGroup>
                </Col>
              </Row>
              <Input className="d-none" type="text" name="honeypot" id="honeypot" />
              <Button color="secondary" type="submit" style={{ width: 150 }} outline>SUBMIT</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default ContactUs;
