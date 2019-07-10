/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

import { Header, Footer } from '../components/partials';
import { CallToAction, Title, Eyebrow, SubHeading, TeamPanel } from '../components';
import sanity from '../client';


const Industries = ({ employees }) => {

  return (
    <React.Fragment>
      <Head>
        <title>Building Products, Healthcare, & More | Modern Marketing & Commerce: MMC</title>
        <meta
          name="description"
          content="From building products to healthcare sales, we inhabit your brand, seamlessly integrating until you won't know your team from ours."
        />
        <meta
          name="robots"
          content="index,follow"
        />
      </Head>
      <Header />
      <Container className="text-center bg-info p-5 mt-5 mb-5">
        <Eyebrow className="font-weight-bold">
          Tailored Solutions
        </Eyebrow>
        <Title className="text-primary">
          Putting our experience to
          <br />
          work for you
        </Title>
        <div style={{ maxWidth: 700 }} className="mx-auto">
          <SubHeading className="text-primary">
            We tailor our approach to achieve outcomes that actually matter to each client and customer.
            Our solutions include planning as well as ongoing, end-to-end execution and management.
          </SubHeading>
        </div>
      </Container>
      <Container className="text-center text-primary bg-secondary pt-5 pb-5 position-relative" style={{ top: -100, zIndex: -1 }} fluid>
        <Container>
          <Row
            className="mt-5"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, .2)', borderTop: '1px solid rgba(255, 255, 255, .2)' }}
          >
            <Title className="text-center mx-auto pt-4">Our industry experience</Title>
          </Row>
          <Row className="pt-5 pb-5" style={{ borderBottom: '1px solid rgba(255, 255, 255, .2)' }}>
            <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0 res-border-right-light">
              <h4>
                32 years
              </h4>
              <p className="text-white pt-2 pb-0">
                Across a variety of industries.
              </p>
            </Col>
            <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0 res-border-right-light">
              <h4>
                2+ billion in revenue
              </h4>
              <p className="text-white pt-2 pb-0">
                Generated or managed annually.
              </p>
            </Col>
            <Col xs={12} md={4} className="pb-0">
              <h4>
                500+ relationships
              </h4>
              <p className="text-white pt-2 pb-0">
                Between businesses and people.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="sub-heading text-center mb-0 mt-5 text-uppercase">See how we&apos;re helping our clients from various industries.</p>
              <Link href="/case-studies">
                <a className="text-white">
                  <u>Read our Case Studies</u>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="text-center pb-5 mb-5">
        <Title className="text-primary pb-4 pt-5">Our Industry Experts</Title>
        <TeamPanel employees={employees} size={12} />
      </Container>
      <CallToAction headline="Experience MMC in action!" body="Let us show you how we can tailor solutions for your unique business and goals." />
      <Footer />
    </React.Fragment>
  );
}

Industries.getInitialProps = async () => {
  const employees = await sanity.fetch(`*[_type == "employee"] {
    _id,
    _type,
    "headshot": headshot.asset->url
  }`);
  return { employees: employees };
};

export default Industries;
