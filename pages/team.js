import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Head from 'next/head';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/base.scss';

import Header from '../components/views/partials/header';
import CallToAction from '../components/views/partials/call-to-action';
import Footer from '../components/views/partials/footer';
import Square from '../components/widgets/square';
import TitleBlock from '../components/views/partials/title-block';
import SubHeading from '../components/views/partials/sub-heading';


const Team = () => {

  const headshotArr = [
    { src: '/static/img/people/Headshots-Square-1.jpg' },
    { src: '/static/img/people/Headshots-Square-2.jpg' },
    { src: '/static/img/people/Headshots-Square-3.jpg' },
    { src: '/static/img/people/Headshots-Square-4.jpg' },
    { src: '/static/img/people/Headshots-Square-5.jpg' },
    { src: '/static/img/people/Headshots-Square-6.jpg' },
    { src: '/static/img/people/Headshots-Square-7.jpg' },
    { src: '/static/img/people/Headshots-Square-8.jpg' },
    { src: '/static/img/people/Headshots-Square-9.jpg' },
    { src: '/static/img/people/Headshots-Square-10.jpg' },
    { src: '/static/img/people/Headshots-Square-11.jpg' },
    { src: '/static/img/people/Headshots-Square-12.jpg' },
    { src: '/static/img/people/Headshots-Square-13.jpg' },
    { src: '/static/img/people/Headshots-Square-14.jpg' },
    { src: '/static/img/people/Headshots-Square-15.jpg' },
    { src: '/static/img/people/Headshots-Square-16.jpg' },
    { src: '/static/img/people/Headshots-Square-17.jpg' }
  ];

  return (
    <React.Fragment>
      <Head>
        <title>Team</title>
      </Head>
      <Header />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <TitleBlock
        eyebrow="The MMC Growth Team"
        title={(
          <span>
            We&rsquo;re Reinventing How We
            <br />
            Work Together
          </span>
        )}
      >
        <p>
          At MMC, &quot;Growth, Reinvented&quot; isn&rsquo;t just about growing our clients&rsquo; business, it&rsquo;s about
          investing in the people we work with every day.  We&rsquo;re reinventing how we work together
          to focus on what really matters, determining success not by office hours but by results for
          our clients, and removing anything that stands in the way.
        </p>
      </TitleBlock>
      <Container className="p-0">
        <Row className="mx-auto text-center no-gutters">
          <Col md="4" className="mb-5 pr-2">
            <img className="img-fluid" alt="dummy" src="https://dummyimage.com/350x350/000/fff" />
            <SubHeading>MMC Commuinity & Values</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              Investing in our people goes beyond work, to investing in who we are
            </p>
            <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>Read our case studies</Button>
          </Col>
          <Col md="4" className="mb-5 pl-1 pr-1">
            <img className="img-fluid" alt="dummy" src="https://dummyimage.com/350x350/000/fff" />
            <SubHeading>Careers at MMC</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              From creative storytellers to deep data magicians, we&apos;re looking for great people to join the team, wherever you are.
              Are you ready to take the next step in your career?
            </p>
            <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>See our capabilities</Button>
          </Col>
          <Col md="4" className="mb-5 pl-2">
            <img className="img-fluid" alt="dummy" src="https://dummyimage.com/350x350/000/fff" />
            <SubHeading>Employee Tools & Access</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              Existing MMC employees can access information including training and onboarding resources, and other information here.
            </p>
            <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>Access Ultipro</Button>
            <br />
            <small>(Employee Sign-in Required)</small>
          </Col>
        </Row>
        <Row className="text-center mt-5 pt-5">
          <Col>
            <h2 className="pt-2 mb-5 text-primary font-weight-bold">
              Our Team is Your Team
            </h2>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className="p-0" style={{ backgroundColor: 'red', width: '200px !important' }}>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className="p-0" style={{ backgroundColor: 'red', width: '200px !important' }}>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className="p-0" style={{ backgroundColor: 'red', width: '200px !important' }}>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
          <Col>
            <Square items={
              headshotArr
            }
            />
          </Col>
        </Row>
      </Container>
      <Container className="p-0 bg-building mt-0 pt-0 position-relative" style={{ top: '-250px', zIndex: -1, height: 800 }} fluid>
        <Container className="h-100 d-table text-center text-white">
          <div className="d-table-cell align-middle" style={{ paddingTop: '30%' }}>
            <FontAwesomeIcon className="mb-4 text-primary" size="3x" width="0" icon={faQuoteLeft} />
            <h4 className="font-weight-bold" style={{ lineHeight: '200% !important' }}>
              Laboris nisi ut aliquip ex ea commodo
              <br />
              consequat duis auto irure
            </h4>
            <h6 className="text-uppercase mt-5 sub-heading">&mdash; Happy Customer</h6>
          </div>
        </Container>
        <CallToAction />
      </Container>

      <Footer />
    </React.Fragment>
  );
}

export default Team;
