import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Head from 'next/head';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header';
import CallToAction from '../components/views/partials/call-to-action';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import Square from '../components/widgets/square';


const Team = () => {

  const params = {
    autoHeight: true,
    direction: 'horizontal'
  };

  return (
    <Meta>
      <Head>
        <title>Team</title>
      </Head>
      <Header />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <Container className="position-relative bg-primary text-white" style={{ height: '55vh', top: '-50px' }}>
        <Row>
          <Col xs="12" className="text-center pt-5">
            <h5 className="eyebrow font-weight-normal text-uppercase pt-3">The MMC Growth Team</h5>
            <h2 className="pt-2 mb-5 font-weight-bold">
              We're Reinventing How We
              <br />
              Work Together
            </h2>
            <p style={{ maxWidth: 650 }} className="pt-2 mx-auto">
              At MMC, "Growth, Reinvented" isn't just about growing our clients' business, it's about
              investing in the people we work with every day.  We're reinventing how we work together
              to focus on what really matters, determining success not by office hours but by results for
              our clients, and removing anything that stands in the way.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="position-relative" style={{ top: '-120px' }}>
        <Row className="mx-auto text-center">
          <Col md="4" className="mb-5">
            <img className="img-fluid" alt="dummy" src="https://dummyimage.com/550x550/000/fff" />
            <h6 className="text-uppercase text-primary sub-heading font-weight-bold pt-4 pb-3">MMC Commuinity & Values</h6>
            <p style={{ lineHeight: '200%', minHeight: 125 }}>
              Investing in our people goes beyond work, to investing in who we are
            </p>
            <Button outline color="secondary text-uppercase mt-4">Read our case studies</Button>
          </Col>
          <Col md="4" className="mb-5">
            <img className="img-fluid" alt="dummy" src="https://dummyimage.com/550x550/000/fff" />
            <h6 className="text-uppercase text-primary sub-heading font-weight-bold pt-4 pb-3">Careers at MMC</h6>
            <p style={{ lineHeight: '200%', minHeight: 120 }}>
              From creative storytellers to deep data magicians, we're looking for great people to join the team, wherever you are.
              Are you ready to take the next step in your career?
            </p>
            <Button outline color="secondary text-uppercase mt-4">See our capabilities</Button>
          </Col>
          <Col md="4" className="mb-5">
            <img className="img-fluid" alt="dummy" src="https://dummyimage.com/550x550/000/fff" />
            <h6 className="text-uppercase text-primary sub-heading font-weight-bold pt-4 pb-3">Employee Tools & Access</h6>
            <p style={{ lineHeight: '200%', minHeight: 130 }}>
              Existing MMC employees can access information including training and onboarding resources, and other information here.
            </p>
            <Button outline color="secondary text-uppercase mt-4">Access Ultipro</Button>
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
              [
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man-3.jpg' },
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className="p-0" style={{ backgroundColor: 'red', width: '200px !important' }}>
            <Square items={
              [
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man-3.jpg' },
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col className="p-0" style={{ backgroundColor: 'red', width: '200px !important' }}>
            <Square items={
              [
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man-3.jpg' },
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
          <Col>
            <Square items={
              [
                { src: '/static/img/people/business-man.jpg' },
                { src: '/static/img/people/business-man-2.jpg' },
                { src: '/static/img/people/business-man-3.jpg' }
              ]
            } />
          </Col>
        </Row>
      </Container>
      <Container className="p-0 bg-building mt-0 pt-0 position-relative" style={{ top: '-250px', zIndex: -1, height: 800 }} fluid>
        <Container className="h-100 d-table text-center text-white">
          <div className="d-table-cell align-middle">
            <FontAwesomeIcon className="mb-4 text-primary" size="3x" width="0" icon={faQuoteLeft} />
            <h3 style={{ lineHeight: '200% !important' }}>
              Laboris nisi ut aliquip ex ea commodo
              <br />
              consequat duis auto irure
            </h3>
            <h6 className="text-uppercase mt-4 sub-heading">&mdash; Happy Customer</h6>
          </div>
        </Container>
        <CallToAction />
      </Container>

      <Footer />
    </Meta>
  );
}

export default Team;
