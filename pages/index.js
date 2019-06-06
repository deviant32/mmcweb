import React from 'react';
import { Jumbotron, Container, Row, Col, Card, CardText, Button } from 'reactstrap';
import Link from 'next/link';
import Head from 'next/head';


import '../styles/base.scss';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import Footer from '../components/views/partials/footer';
import DynamicContent from '../components/dec/dynamic-content';
import CallToAction from '../components/views/partials/call-to-action';


const HomePage = () => {

  return (
    <Meta>
      <Head>
        <title>Home Page Title!</title>
      </Head>
      <Header />
      <img style={{ position: 'absolute', left: 0, marginTop: '300px', }} src="static/img/abstract/circle-dots.svg" alt="circle" />
      <img style={{ position: 'absolute', right: 0, marginTop: '1000px', }} src="static/img/abstract/square.svg" alt="square" />
      <Container className="bg-secondary text-white text-center" fluid>
        <Container>
          <Row className="h-100">
            <Col xs="12" sm="12" md="12" lg="6" className="my-auto">
              <h5 className="mt-0 mb-2 mt-3 mt-sm-3 mt-lg-0 eyebrow text-uppercase">Let&apos;s Talk About</h5>
              <h1 className="font-weight-bold mb-5" style={{ fontSize: '5rem' }}>
                Growth in a
                <br />
                whole new
                <br />
                light.
              </h1>
              <Link href="/typography" passHref>
                <Button className="mt-4 rounded-0 text-uppercase font-weight-normal pl-5 pr-5" size="md" outline color="warning">Learn More</Button>
              </Link>
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" className="mt-3 mt-md-3 mt-lg-0">
              <img alt="Title" className="img-fluid" src="/static/img/600x600.png" />
            </Col>
          </Row>
        </Container>
      </Container>
      <DynamicContent package_codes={['joe123']}>
        <Container fluid className="bg-secondary text-white text-center p-4">
          <Row>
            <Col>
              <h3>Hidden content by Package Code</h3>
            </Col>
          </Row>
        </Container>
      </DynamicContent>
      <Jumbotron fluid className='bg-white text-primary mb-0'>
        <Container className="text-center">
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <h2 className="pb-3 font-weight-bold">
                Modern Marketing &
                <br />
                Commerce
              </h2>
              <h6 className="sub-heading pt-3 text-uppercase font-weight-bold">
                At MMC we exist to build sustainable, high-value relationships
                <br />
                between people and business.
              </h6>
              <p style={{ lineHeight: '200%', maxWidth: 700 }} className="text-secondary mt-5 mx-auto">
                We help our clients uncover hidden potential within their existing customer and prospect data and create authentic, sustainable growth.  With over $2.5BN worth
                of client revenue managed annually, at an average of 20% growth year-over-year, MMC is the secret weapon for business leaders who don't leave anything to chance.
                Let us show what we mean by:
                <br />
                <p className="font-weight-bold">&quot;Growth, Reinvented.&quot;</p>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="text-center text-primary bg-white pt-5 pb-5">
        <h2 className="font-weight-bold pb-3">You&apos;ll be in good company.</h2>
        <h6 className="sub-heading text-uppercase mx-auto pt-3 font-weight-bold">
          MMC Manages over $2.5BN in revenue for clients like these.
          <br />
          Let us show you what we can do for you.
        </h6>
      </Container>

      <Container className="bg-secondary mt-0" fluid>
        <Container>
          <Row className="pt-5">
            <Col xs="12" sm="6" md="4">
              <Card body inverse color="secondary" className="p-4 mb-5 border border-warning text-center">
                <CardText>
                  <h4>
                    Industries We
                    <br />
                    Serve
                  </h4>
                  <p className="pt-4 pb-4">
                    Embedding experts for
                    <br />
                    maximum impact.
                  </p>
                  <Button color="warning" style={{ width: 170 }} outline className="text-uppercase">Learn More</Button>
                </CardText>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4">
              <Card body inverse color="secondary" className="p-4 mb-5 border border-warning text-center">
                <CardText>
                  <h4>
                    Resources &
                    <br />
                    Information
                  </h4>
                  <p className="pt-4 pb-4">
                    See the proof: case studies,
                    <br />
                    capabilities, and more.
                  </p>
                  <Button color="warning" style={{ width: 170 }} outline className="text-uppercase">Learn More</Button>
                </CardText>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="4">
              <Card body inverse color="secondary" className="p-4 mb-5 border border-warning text-center">
                <CardText>
                  <h4>
                    Join the MMC
                    <br />
                    Team
                  </h4>
                  <p className="pt-4 pb-4">
                    Kickstart your career
                    <br />
                    growth today.
                  </p>
                  <Button color="warning" style={{ width: 170 }} outline className="text-uppercase">Learn More</Button>
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="bg-full" style={{ height: 400 }} fluid />

      <CallToAction />
      <Footer />
    </Meta>
  )
}


export default HomePage;
