import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import Router from 'next/router'
import ReactMapGL from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';

library.add(fab)


const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData(event.target);

    var object = {};
    data.forEach((value, key) => { object[key] = value });
    Router.replace('/thank-you');
  }

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 500,
    latitude: 42.102740,
    longitude: -75.832630,
    zoom: 11
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
    <Meta>
      <Head>
        <title>Contact Us</title>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Header />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <Container className="position-relative bg-primary text-white mb-n5" style={{ height: '30%', minHeight: '380px', top: '-50px', zIndex: '2' }}>
        <Row>
          <Col className="text-center pt-5" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <h5 className="eyebrow text-uppercase tre pt-3">Get in touch with the MMC team</h5>
            <h1 className="pt-0 font-weight-bold">We&apos;d love to hear from you!</h1>
            <p className="pt-5 mx-auto">
              Use the contact form below, or contact us on social media.  Whether you&apos;re a prospective client looking for more
              information, a prospective employee looking for the perfect new career, or just stumbled across MMC, and would like to find more about what
              we do, use the contact form below to get in touch, and we&apos;ll get back to you right away.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ minHeight: 500, position: 'relative', top: '-50px', zIndex: '1' }}>
        <Row>
          <Col sm={12} md={5} style={{ backgroundColor: '#DCDDDC', minHeight: '450px', maxHeight: 500, paddingTop: '60px' }}>
            <div
              className="mt-4 text-center"
              style={{
                paddingTop: '20px',
                paddingBottom: '10%',
                marginTop: '70px',
                borderTop: 'thin solid black',
                borderBottom: 'thin solid black',
                width: '60%',
                margin: '0 auto'
              }}
            >
              <h4>LOGO</h4>
              <p className="text-uppercase">
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
              <br />
              <Button color="secondary" outline className="text-uppercase mt-4">Learn about Binghamton</Button>
            </div>
          </Col>
          <Col className="pl-0 pr-0" sm={12} md={7}>
            <ReactMapGL
              mapboxApiAccessToken="pk.eyJ1IjoiamtvbGJhIiwiYSI6ImNqd2pianYwdDBnMHE0M254OGVoYm54eWcifQ.FzwQEW_lNdpXIoLv0RXnGw"
              mapStyle="mapbox://styles/jkolba/cjwjk8f2913yo1co2nf0o8ydy"
              {...viewport}
              onViewportChange={(viewport) => setViewport(viewport)}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="pt-sm-0 pt-0 pt-md-5 pb-5">
          <Col className="pl-5 pr-5">
            <h4 className="text-center text-primary">Contact MMC</h4>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Row className="mt-5" form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="first_name">WHAT&apos;S YOUR NAME?</Label>
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
              <Button color="primary" type="submit" style={{ width: 150 }} outline>SEND</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Meta>
  );
}

export default ContactUs;
