/* eslint-disable no-console */
import React from 'react';
import { Jumbotron, Container, Row, Col, Card, CardText, Button } from 'reactstrap';
import Link from 'next/link';
import Head from 'next/head';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/base.scss';

import Header from '../components/views/partials/header'
import Footer from '../components/views/partials/footer';
import SubHeading from '../components/views/partials/sub-heading';
import DynamicContent from '../components/dec/dynamic-content';
import CallToAction from '../components/views/partials/call-to-action';
import Title from '../components/views/partials/title';


const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home Page Title!</title>
      </Head>
      <Header />
      <img
        style={{ position: 'absolute', left: 0, marginTop: '350px', width: '40%', maxWidth: 300 }}
        src="/static/img/abstract/circle-dots.svg"
        alt="circle"
      />
      <img
        style={{ position: 'absolute', right: 0, marginTop: '750px', width: '40%', maxWidth: 300, zIndex: 2 }}
        src="/static/img/abstract/square.svg"
        alt="square"
      />
      <Container className="bg-secondary text-white text-center" fluid>
        <Container>
          <Row className="h-100">
            <Col xs="12" sm="12" md="12" lg="6" className="my-auto pt-5 pb-5 order-2 order-lg-1">
              <h5 className="mt-0 mb-2 mt-3 mt-sm-3 mt-lg-0 pt-5 eyebrow text-uppercase">Let&apos;s Talk About</h5>
              <h1 className="font-weight-bold mb-5" style={{ fontSize: '5rem', lineHeight: '85%' }}>
                Growth in a
                <br />
                whole new
                <br />
                light.
              </h1>
              <Link href="/growth-reinvented">
                <Button className="mt-4 rounded-0 text-uppercase font-weight-normal pl-5 pr-5 mb-5" size="md" outline color="warning">Learn More</Button>
              </Link>
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" className="bg-home mr-0 order-1 order-lg-2" style={{ minHeight: 300 }}>
              &nbsp;
            </Col>
          </Row>
        </Container>
      </Container>
      <DynamicContent package_codes={['joe1234']}>
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
              <Title>
                Modern Marketing &
                <br />
                Commerce
              </Title>
              <SubHeading>
                We&apos;re the secret weapon you&apos;ve never heard of.
              </SubHeading>
              <p style={{ maxWidth: 720, lineHeight: '200%' }} className="text-secondary mx-auto">
                For 32 years, industry leaders have embedded us within their businesses to reinvent their approach to growth.
                We challenge how things have always been done to unleash the untapped potential that lives within every organization.
                And, most importantly we put each customer’s unique needs and behaviors at the center of the business.
                At the heart of it, we’re building customer relationships that are designed to thrive in the new era of business.
                This is growth, reinvented.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className='bg-secondary text-white mb-0'>
        <Container className="text-center">
          <Row>
            <Col className="pb-5" xs={12} md={4}>
              <span className="circle text-center">
                <img src="/static/img/abstract/blue-circle.svg" alt="circle heading" style={{ width: 180 }} className="img-fluid" />
              </span>
              <h2 style={{ position: 'relative', top: '-130px', fontSize: '3.5rem', color: '#ffffff' }}>
                who we are
              </h2>
              <p className="mt-n2" style={{ height: 80 }}>
                We are Bold.
                <br />
                We are Bright.
                <br />
                We are Open.
              </p>
              <Button outline color="warning">&quot;Growth Reinvented?&quot;</Button>
            </Col>
            <Col className="pb-5" xs={12} md={4}>
              <span className="circle text-center">
                <img src="/static/img/abstract/blue-circle.svg" alt="circle heading" style={{ width: 180 }} className="img-fluid" />
              </span>
              <h2 style={{ position: 'relative', top: '-130px', fontSize: '3.5rem', color: '#ffffff' }}>
                what we do
              </h2>
              <p className="mt-n2 mx-auto" style={{ height: 80, maxWidth: 240 }}>
                When the rules have completely changed, the key to getting ahead is to challenge convention.
              </p>
              <Button outline color="warning">Meet the team</Button>
            </Col>
            <Col className="pb-5" xs={12} md={4}>
              <span className="circle text-center">
                <img src="/static/img/abstract/blue-circle.svg" alt="circle heading" style={{ width: 180 }} className="img-fluid" />
              </span>
              <h2 style={{ position: 'relative', top: '-130px', fontSize: '3.5rem', color: '#ffffff' }}>
                how we do it
              </h2>
              <p className="mt-n2" style={{ height: 80 }}>
                We design, execute and manage tailored growth strategies that transform disengaged buyers into brand advocates.
              </p>
              <Button outline color="warning">Read our case studies</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container className="text-center text-primary bg-white pt-5 pb-5">
        <Title>
          You&apos;ll be in good company.
        </Title>
        <SubHeading>
          MMC Manages over $2.5BN in revenue for clients like these.
        </SubHeading>
        <Row className="pt-3 mb-5">
          <Col xs={6} sm={4} md={2} className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-4 img-fluid">
            <img src="https://dummyimage.com/160x80/000/fff" alt="Company" />
          </Col>
        </Row>
        <a className="text-secondary" href="#!"><u>Let us show you what we can do for you.</u></a>
      </Container>
      {/* <Container className="bg-secondary mt-0 pt-5 pb-5" fluid>
        <Container>
          <Row
            className="pt-5 pb-5"
            style={{
              borderTop: 'thin solid rgba(255, 255, 255, .25)',
              borderBottom: 'thin solid rgba(255, 255, 255, .25)'
            }}
          >
            <Col xs="12" sm="6" md="4">
              <Card body inverse color="secondary" className="text-center card-border-right">
                <CardText>
                  <h2 className="eyebrow text-uppercase text-nowrap" style={{ lineHeight: '50% !important' }}>
                    Industries
                    <br />
                    We Serve
                  </h2>
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
              <Card body inverse color="secondary" className="text-center card-border-right">
                <CardText>
                  <h2 className="eyebrow text-uppercase text-nowrap" style={{ lineHeight: '50% !important' }}>
                    Resources &
                    <br />
                    Information
                  </h2>
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
              <Card body inverse color="secondary" className="text-center">
                <CardText>
                  <h2 className="eyebrow text-uppercase text-nowrap" style={{ lineHeight: '50% !important' }}>
                    Join the
                    <br />
                    MMC Team
                  </h2>
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
      </Container> */}
      <Container className="bg-building" style={{ height: 500 }} fluid>
        <Container className="h-100 d-table text-center text-white">
          <div className="d-table-cell align-middle">
            <FontAwesomeIcon className="mb-4 text-primary" size="3x" width="0" icon={faQuoteLeft} />
            <h4 className="font-weight-bold" style={{ lineHeight: '200% !important' }}>
              Laboris nisi ut aliquip ex ea commodo
              <br />
              consequat duis auto irure
            </h4>
            <SubHeading>&mdash; Happy Customer</SubHeading>
          </div>
        </Container>
      </Container>
      <CallToAction />
      <Footer />
    </React.Fragment>
  )
}


export default HomePage;
