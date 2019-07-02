/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';

import { Header, Footer } from '../components/partials';
import { CallToAction, Title, SubHeading, Eyebrow } from '../components';


const Community = () => {
  return (
    <React.Fragment>
      <Head>
        <title>MMC Community & Values</title>
      </Head>
      <Header />
      <Container className="text-center bg-info p-5 mt-4 position-relative" style={{ bottom: -50, zIndex: 100 }}>
        <Eyebrow className="font-weight-bold">
          MMC Community & Values
        </Eyebrow>
        <Title className="text-primary">
          An investment
          <br />
          in your future
        </Title>
        <div style={{ maxWidth: 650 }} className="mx-auto">
          <p>
            We recognize that the entire idea of work is being reinvented before our eyes.  Success isn&apos;t determined by office hours
            or utilization reports; it&apos;s in the faces of our clients when they see our results.
            MMC is committed to finding great people and providing an environment that lets them be great by removing obstacles to success
            and reinventing growth for our people in meaningful ways, every day.
          </p>
        </div>
      </Container>
      <Container fluid className="bg-secondary text-center p-5">
        <Container className="pt-5">
          <Row>
            <Col>
              <Title
                className="text-primary pt-5"
                style={{ borderTop: '1px solid rgba(255, 255, 255, .2)' }}
              >
                The MMC Core Values
              </Title>
              <SubHeading className="text-white pb-5" style={{ borderBottom: '1px solid rgba(255, 255, 255, .2)' }}>
                More than just words on a wall, these are the guiding principles
                <br />
                that govern how we align, how we build, and how we relate.
              </SubHeading>
            </Col>
          </Row>

          <Row className="mb-5 mt-3 pb-5" style={{ borderBottom: '1px solid rgba(255, 255, 255, .2)' }}>
            <Col xs="12" sm="6" className="res-border-right-light">
              <Title className="text-primary h4">
                Trust in teams
              </Title>
              <p className="text-white mx-auto" style={{ maxWidth: 360 }}>
                We work with transparency and honesty across our disciplines and solve problems with a 360-degree perspective.
                We acknowledge and respect the value that each individual brings to the whole. Together, we become more than the sum of our parts.
              </p>
            </Col>
            <Col xs="12" sm="6" className="pt-5 pt-sm-0">
              <Title className="text-primary h4">
                Moving as one
              </Title>
              <p className="text-white mx-auto" style={{ maxWidth: 360 }}>
                We&apos;re at our best when we’re driving towards the same goal. As a team, we tackle the tough questions first to align on shared
                objectives and anticipate hurdles. We design, test, and refine solutions quickly in order to deliver high impact results.
              </p>
            </Col>
          </Row>
          <Row className="pb-5" style={{ borderBottom: '1px solid rgba(255, 255, 255, .2)' }}>
            <Col xs="12" sm="6" className="res-border-right-light">
              <Title className="text-primary h4">
                Perpetual progress
              </Title>
              <p className="text-white mx-auto" style={{ maxWidth: 360 }}>
                We believe that there’s always a better way. We challenge assumptions and hunt for the “aha”
                moments until we find them. We refuse to settle for ourselves, our teams, and our clients.
                We take risks and continuously learn from them.
              </p>
            </Col>
            <Col xs="12" sm="6" className="pt-5 pt-sm-0">
              <Title className="text-primary h4">
                People with drive and passion
              </Title>
              <p className="text-white mx-auto" style={{ maxWidth: 360 }}>
                We inspire and support one another to find and cultivate our strengths.
                When we’re at our best as individuals, we bring our best to each other and our clients.
                We stay curious to learn new things about ourselves, our business, and the world around us.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="text-center text-primary pt-5 pb-5" fluid style={{ backgroundColor: '#dcdddc' }}>
        <Container className="pb-3 pt-3">
          <Row className="row-border-top pt-4 pb-5">
            <Col>
              <Title className="text-center mx-auto pt-4">MMC Personality</Title>
              <p className="text-secondary mx-auto mt-4" style={{ maxWidth: 600 }}>
                Our personality attributes are the key drivers of the MMC community.  They are our essence and influence all the ways we
                communicate and present our promise to our customers and the world.
              </p>
            </Col>
          </Row>
          <Row className="row-border pt-5 pb-5">
            <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0">
              <h4>
                Bold
              </h4>
              <p className="text-secondary pt-2 pb-0">
                We speak our mind.  We stand by our word.
                We welcome challenges. We look ahead.
              </p>
            </Col>
            <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0">
              <h4>
                Bright
              </h4>
              <p className="text-secondary pt-2 pb-0">
                We&apos;re insightfully optimistic and we take every opportunity to illuminate and enlighten.
              </p>
            </Col>
            <Col xs={12} md={4} className="pb-0">
              <h4>
                Open
              </h4>
              <p className="text-secondary pt-2 pb-0">
                Our approach is warm, welcoming and engaging.  We live for the free flow of ideas.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <CallToAction headline="Join our growth team!" body="We are lifelong learners, equipping one another with the tools and resources to continuously grow." />
      <Footer />
    </React.Fragment>
  );
};

export default Community;
