import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import Router from 'next/router'
import GoogleMapReact from 'google-map-react';
import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';

const defaultProps = {
  center: {
    lat: 42.102740,
    lng: -75.832630
  },
  zoom: 11
};


const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData(event.target);

    var object = {};
    data.forEach((value, key) => { object[key] = value });
    Router.replace('/thank-you');
  }

  return (
    <Meta>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Header />
      <Container style={{ minHeight: 400 }}>
        <Row>
          <Col xs="12" className="text-center pt-5">
            <h4 className="eyebrow text-uppercase pt-3">Get in touch with the MMC team</h4>
            <h2 className="pt-2">We&apos;d love to hear from you!</h2>
            <p style={{ maxWidth: 590 }} className="pt-2 mx-auto">
              Use the contact form below, or contact us on social media.  Whether you&apos;re a prospective client looking for more
              information, a prospective employee looking for the perfect new career, or just stumbled across MMC, and would like to find more about what
              we do, use the contact form below to get in touch, and we&apos;ll get back to you right away.
            </p>
            <div className="pt-5 pb-3" style={{ height: 600, width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAqhHd3qncWk3Vc61T_kXliE9I0qteid-o' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              />
            </div>
          </Col>
        </Row>
        <Row className="pt-4 text-left">
          <Col xs="12" sm="12" md="4">
            <p>
              29 Industrial Park Dr.
              <br />
              Binghamton, NY 13904
            </p>
          </Col>
          <Col xs="12" sm="12" md="4">
            <p>
              <strong>P &nbsp;</strong>
              (607) 754-7473
              <br />
              <strong>E &nbsp;</strong>
              info@mmcweb.com
            </p>
          </Col>
          <Col xs="12" sm="12" md="4">
            <Button color="primary" outline>LEARN ABOUT BINGHAMTON</Button>
          </Col>
        </Row>
        <Row className="pt-5 mb-5">
          <Col>
            <h4 className="text-center">Contact Us</h4>
            <p className="font-weight-bold pt-3">WHAT&apos;S YOUR INTEREST?</p>

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
                    <Label for="first_name">FIRST NAME</Label>
                    <Input type="text" name="first_name" id="first_name" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="last_name">LAST NAME</Label>
                    <Input type="text" name="last_name" id="last_name" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="email">EMAIL</Label>
                <Input required type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="subject">SUBJECT</Label>
                <Input required type="subject" name="subject" id="subject" />
              </FormGroup>
              <FormGroup>
                <Label for="message">MESSAGE</Label>
                <Input type="textarea" rows="10" name="message" id="message" />
              </FormGroup>
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
