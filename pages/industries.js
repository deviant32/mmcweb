/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

import { Header, Footer } from './partials';
import { CallToAction, Title, Eyebrow, SubHeading, TeamPanel } from '../components';


const Industries = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Our Industries</title>
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
                2+ billion in
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
          <Link href="/case-studies">
            <a className="text-secondary">
              <u>Read our Case Studies</u>
            </a>
          </Link>
        </Container>
      </Container>
      <Container className="text-center pb-5 mb-5">
        <Title className="text-primary pb-4 pt-5">Our Industry Experts</Title>
        <TeamPanel size={12} />
      </Container>
      <CallToAction headline="Experience MMC in action!" body="Let us show you how we can tailor solutions your unique business and goals." />
      <Footer />
    </React.Fragment>
  );
}

export default Industries;
