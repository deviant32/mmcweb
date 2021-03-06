/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import Link from 'next/link';
import Head from 'next/head';

import { Header, Footer, Quote } from '../components/partials';
import { CallToAction, SubHeading, Title } from '../components';


const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Modern Marketing & Commerce | MMC Is Growth, Reinvented</title>
        <meta
          name="description"
          content="For over 30 years we've helped industry leaders reinvent their approach to growth. Request a demo & find out what MMC can do for you."
        />
        <meta
          name="robots"
          content="index,follow"
        />
      </Head>
      <Header />
      <img
        style={{ position: 'absolute', left: '50%', top: '-7%', width: 250, transform: 'translate(-50%,0)', zIndex: 1 }}
        src="/static/img/abstract/bottom-circle-bg.svg"
        alt="circle"
        className="d-none d-md-block"
      />
      <img
        style={{ position: 'absolute', left: 0, marginTop: '350px', width: '40%', maxWidth: 300 }}
        src="/static/img/abstract/circle-dots.svg"
        alt="circle"
      />
      <img
        style={{ position: 'absolute', right: 0, marginTop: '60rem', maxWidth: 300 }}
        src="/static/img/abstract/square.svg"
        alt="square"
      />
      <Container className="bg-secondary text-white text-center" fluid>
        <Container className="p-0">
          <Row className="h-100">
            <Col xs="12" sm="12" md="12" lg="6" className="my-auto pt-5 pb-5 order-2 order-lg-1">
              <h5 className="mt-0 mb-2 mt-3 mt-sm-3 mt-lg-0 pt-5 eyebrow text-uppercase">Let&apos;s Talk About</h5>
              <h1 className="font-weight-bold mb-5" style={{ fontSize: '5rem', lineHeight: '85%', zIndex: 200 }}>
                Growth in a
                <br />
                whole new
                <br />
                light.
              </h1>
              <Link href="/growth-reinvented">
                <a>
                  <Button
                    className="mt-4 rounded-0 text-uppercase font-weight-normal pl-5 pr-5 mb-5"
                    size="md"
                    outline
                    color="warning"
                  >
                    Meet MMC
                  </Button>
                </a>
              </Link>
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" className="bg-home mr-0 order-1 order-lg-2" style={{ minHeight: 370 }}>
              &nbsp;
            </Col>
          </Row>
        </Container>
      </Container>
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
              <p style={{ maxWidth: 720, lineHeight: '200%', zIndex: 100 }} className="text-secondary mx-auto">
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
            <Col xs={12} md={4} className="mb-5">
              <span className="circle text-center">
                <img src="/static/img/abstract/blue-circle.svg" alt="circle heading" style={{ width: 180 }} className="img-fluid" />
              </span>
              <h2 style={{ position: 'relative', top: '-130px', fontSize: '3.5rem', color: '#ffffff' }}>
                How we do it
              </h2>
              <p className="mt-n2" style={{ height: 80 }}>
                We grow 87% of your accounts that are hardest to reach.
              </p>
              <Link href="/growth-reinvented">
                <a>
                  <Button outline color="warning">This is Growth, Reinvented</Button>
                </a>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <span className="circle text-center">
                <img src="/static/img/abstract/blue-circle.svg" alt="circle heading" style={{ width: 180 }} className="img-fluid" />
              </span>
              <h2 style={{ position: 'relative', top: '-130px', fontSize: '3.5rem', color: '#ffffff' }}>
                What we do
              </h2>
              <p className="mt-n2 mx-auto" style={{ height: 80, maxWidth: 240 }}>
                See how we reinvent growth for our clients every day.
              </p>
              <Link href="/case-studies">
                <a>
                  <Button outline color="warning">Our case studies</Button>
                </a>
              </Link>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <span className="circle text-center">
                <img src="/static/img/abstract/blue-circle.svg" alt="circle heading" style={{ width: 180 }} className="img-fluid" />
              </span>
              <h2 style={{ position: 'relative', top: '-130px', fontSize: '3.5rem', color: '#ffffff' }}>
                Who we are
              </h2>
              <p className="mt-n2" style={{ height: 80 }}>
                We are Bold.  We are Bright.  We are Open.
              </p>
              <Link href="/team">
                <a>
                  <Button outline color="warning">Meet the team</Button>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container className="text-center text-primary bg-white pt-5 pb-5">
        <Title>
          Reinventing growth in...
        </Title>
        <div className="slider mb-5 mt-5">
          <div className="slide-track">
            <div className="slide">
              <img src="/static/img/clients/big-box.svg" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/static/img/clients/building-materials.svg" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/static/img/clients/health.svg" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/static/img/clients/hvac.svg" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/static/img/clients/medical-devices.svg" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/static/img/clients/pharma.svg" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/static/img/clients/plumbing.svg" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/static/img/clients/roofing.svg" width="150" alt="" />
            </div>
            <div className="slide">
              <img src="/static/img/clients/wound-care.svg" width="150" alt="" />
            </div>
          </div>
        </div>
        <Link href="/capabilities">
          <a className="text-secondary"><u>Let us show you what we can do for you.</u></a>
        </Link>
      </Container>
      <Container className="text-center text-primary pt-5 pb-5" fluid style={{ backgroundColor: '#dcdddc' }}>
        <Container>
          <Row className="row-border pt-5 pb-5">
            <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0">
              <h4 style={{ height: 55 }}>Our industries</h4>
              <Link href="/industries">
                <a>
                  <Button outline className="text-uppercase" color="secondary">Explore our experience</Button>
                </a>
              </Link>
            </Col>
            <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0">
              <h4 style={{ height: 55 }}>Case studies</h4>
              <Link href="/case-studies">
                <a>
                  <Button outline className="text-uppercase" color="secondary">Read about reinvention</Button>
                </a>
              </Link>
            </Col>
            <Col xs={12} md={4} className="pb-0">
              <h4 style={{ height: 55 }}>Careers at MMC</h4>
              <Link href="https://recruiting.ultipro.com/MOD1007MDRN/JobBoard/878dbef4-95e7-a042-ddfc-997e388fe644/?q=&o=postedDateDesc&w=&wc=&we=&wpst=">
                <a rel="noopener" target="_blank">
                  <Button outline className="text-uppercase" color="secondary">Join the team</Button>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
      <Quote />
      <CallToAction headline="Become a growth partner!" body="We act as a true team throughout the sales process, celebrating success as one." />
      <Footer />
    </React.Fragment>
  )
}


export default HomePage;
