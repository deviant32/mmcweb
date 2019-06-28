import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';

import { Header, Footer } from './partials';
import { CallToAction, TitleBlock } from '../components';


const Resources = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Resources</title>
      </Head>
      <Header />
      <img style={{ position: 'absolute', left: 0, marginTop: 280, width: 200, zIndex: 2 }} src="/static/img/abstract/square-yellow.svg" alt="circle" />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <TitleBlock
        eyebrow="CASE STUDIES, CAPABILITIES, NEWS"
        title="Resource Center"
      >
        <p>
          Our platform accelerates growth at an average of 20% year-over-year,
          turning the under-performing end of your client list into the top line
        </p>
        <p>
          Check out our Case Studies, our Capabilities, and our News & Information page to see how MMC is
          reinventing growth for clients just like you, every day.
        </p>
      </TitleBlock>
      <Container>
        <Row className="mx-auto text-center">
          <Col md="6" className="mb-5">
            <img className="img-fluid" alt="dummy" src="https://placeimg.com/550/550/tech" />
            <h6 className="text-uppercase text-primary sub-heading font-weight-bold pt-4 pb-3">MMC Case Studies</h6>
            <p style={{ lineHeight: '200%' }}>
              No matter the industry, MMC excels at targeting and growing untapped segments of your business.  Let us show you how.
            </p>
            <Button outline color="secondary text-uppercase mt-4">Read our case studies</Button>
          </Col>
          <Col md="6" className="mb-5">
            <img className="img-fluid" alt="dummy" src="https://placeimg.com/550/550/tech" />
            <h6 className="text-uppercase text-primary sub-heading font-weight-bold pt-4 pb-3">MMC Capabilities</h6>
            <p style={{ lineHeight: '200%' }}>
              Learn more about our areas of expertise, our industry experience, and the people that make up the MMC community.
            </p>
            <Button outline color="secondary text-uppercase mt-4">See our capabilities</Button>
          </Col>
        </Row>
      </Container>
      <CallToAction />
      <Footer />
    </React.Fragment>
  );
}

export default Resources;
