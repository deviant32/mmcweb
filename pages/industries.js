import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from '../components/views/partials/header';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';
import Title from '../components/views/partials/title';
import Eyebrow from '../components/views/partials/eyebrow';
import SubHeading from '../components/views/partials/sub-heading';


const Industries = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Our Capabilities</title>
      </Head>
      <Header />
      <Container className="text-center bg-info p-5 mt-5 mb-5">
        <Eyebrow className="font-weight-bold">
          Tailored Solutions
        </Eyebrow>
        <Title className="text-primary">
          Specialized expertise for
          <br />
          every industry
        </Title>
        <div style={{ maxWidth: 700 }} className="mx-auto">
          <SubHeading className="text-primary">
            Our team inhabits your brand, seamlessly integrating until you won&apos;t know your team from ours.
          </SubHeading>
        </div>
      </Container>
      <Container className="text-center pb-5">
        <Title className="text-primary">
          Putting our experience to
          <br />
          work for you
        </Title>
        <div style={{ maxWidth: 650 }} className="mx-auto">
          <SubHeading className="text-primary">
            We work with our clients to rethink the traditional sales model,
            grow revenue, and thrive by focusing on the customer above all else.
          </SubHeading>
          <p>
            Whether in building products or healthcare, consumer products or retail & big box, whatever the industry our dedicated team goes
            deep in your field and become integrated members of your business.
          </p>
        </div>
      </Container>
      <Container className="text-center text-primary pt-5 pb-5" fluid style={{ backgroundColor: '#dcdddc' }}>
        <Container>
          <Row className="row-border-top">
            <Title className="text-center mx-auto pt-4">Industry Experience</Title>
          </Row>
          <Row className="row-border pt-5 pb-5">
            <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0">
              <h4 style={{ height: 20 }}>
                32 years of
                <br />
                experience
              </h4>
              <p className="text-secondary pt-5 pb-0">
                Across a variety of industries.
              </p>
            </Col>
            <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0">
              <h4 style={{ height: 20 }}>
                2.5+ billion in
                <br />
                revenue
              </h4>
              <p className="text-secondary pt-5 pb-0">
                Generated or managed annually.
              </p>
            </Col>
            <Col xs={12} md={4} className="pb-0">
              <h4 style={{ height: 20 }}>
                500+ relationships
              </h4>
              <p className="text-secondary pt-5 pb-0">
                Between businesses and people.
              </p>
            </Col>
          </Row>
          <p className="sub-heading text-center mb-0 mt-5 text-uppercase">See how we&apos;re helping our clients from various industries.</p>
          <a className="text-secondary" href="#!"><u>Read our Case Studies</u></a>
        </Container>
      </Container>
      <Container className="text-center pb-5 pt-5">
        <Title className="text-primary">
          MMC Growth Clients
        </Title>
        <p>
          Here are a few companies who are reinventing growth with MMC.
        </p>
        <Row className="pt-3 mb-5">
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
        </Row>
      </Container>

      <CallToAction />
      <Footer />
    </React.Fragment>
  );
}

export default Industries;
