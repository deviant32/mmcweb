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
import Header from '../components/views/partials/header'
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import Title from '../components/views/partials/title';
import TitleBlock from '../components/views/partials/title-block';

library.add(fab)


const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData(event.target);

    axios({
      method: 'post',
      url: 'https://mmccontactus.azurewebsites.net/api/MMCContactUs?code=YoI73S8LmxXaXpKLKLumtuBPhWtGyK8kUsaUxvj9ZtWaGIqx5Xi0EQ==',
      data: data,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then((response) => {
        console.log(response);
        // Router.replace('/thank-you');
      })
      .catch((err) => {
        console.log(err);
      });
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
        <title>Contact Us</title>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Header />
      <img style={{ position: 'absolute', right: 0, marginTop: 100, }} src="/static/img/abstract/circle.svg" alt="circle" />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <TitleBlock eyebrow="Get in touch with the MMC team" title="We&rsquo;d love to hear from you!">
        <p>
          Whether you&rsquo;re a prospective client looking for more information, a prospective employee looking for the perfect new career,
          or just stumbled across MMC and would like to find out more about what we do, we&rsquo;d love to hear from you.  Use the contact form
          below, or contact us on social media and we&rsquo;ll get back to you right away.
        </p>
      </TitleBlock>
      <Container fluid style={{ minHeight: 500, position: 'relative', top: '-100px', zIndex: '1' }}>
        <Row className="bg-secondary text-white">
          <Col sm={12} md={5} style={{ minHeight: '450px', maxHeight: 500, paddingTop: '80px' }}>
            <div
              className="mt-4 text-center"
              style={{
                paddingTop: '30px',
                paddingBottom: '10%',
                marginTop: '70px',
                borderTop: 'thin solid rgba(255, 255, 255, .25)',
                borderBottom: 'thin solid rgba(255, 255, 255, .25)',
                width: '60%',
                margin: '0 auto'
              }}
            >
              <img src="/static/img/logos/logo.svg" alt="Modern Marketing & Commerce" />
              <p className="text-uppercase mt-4">
                29 Industrial park dr.
                <br />
                Binghamton, NY 13904
              </p>
              <p className="text-uppercase">
                1+ 607.754.7473
                <br />
                Info@mmcweb.com
              </p>
              <FontAwesomeIcon width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'facebook-f']} />
              <FontAwesomeIcon width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'twitter']} />
              <FontAwesomeIcon width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'linkedin-in']} />
            </div>
          </Col>
          <Col className="pl-0 pr-0" sm={12} md={7}>
            <ReactMapGL
              dragPan
              scrollZoom={false}
              touchAction='pan-y'
              mapboxApiAccessToken="pk.eyJ1IjoiamtvbGJhIiwiYSI6ImNqd2pianYwdDBnMHE0M254OGVoYm54eWcifQ.FzwQEW_lNdpXIoLv0RXnGw"
              mapStyle="mapbox://styles/jkolba/cjwkqlacg1wjj1cmpi4kwf1e3"
              {...viewport}
              onViewportChange={(viewport) => setViewport(viewport)}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-n5 pb-5">
          <Col className="pl-5 pr-5">
            <Title className="h3 text-primary text-center">Contact MMC</Title>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormGroup tag="fieldset" required>
                <FormGroup check>
                  <Label check>
                    <Input value="general" type="radio" name="interest" />
                    General
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input value="career" type="radio" name="interest" />
                    Career Opportunities
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input value="services" type="radio" name="interest" />
                    Our Services
                  </Label>
                </FormGroup>
              </FormGroup>
              <Row className="mt-5" form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="first_name">WHAT&rsquo;S YOUR NAME?</Label>
                    <Input type="text" name="first_name" id="first_name" placeholder="First Name" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">&nbsp;</Label>
                    <Input type="text" name="last_name" id="last_name" placeholder="Last Name" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-3" form>
                <Col className="mb-0" md={6}>
                  <FormGroup>
                    <Label for="first_name">HOW CAN WE REACH YOU?</Label>
                    <Input required type="email" name="email" id="email" placeholder="Email" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="">&nbsp;</Label>
                    <Input type="text" name="phone" id="phone" placeholder="Phone" />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <FormGroup>
                    <Label for="message">HOW CAN WE HELP?</Label>
                    <Input type="textarea" rows="10" name="message" id="message" />
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
