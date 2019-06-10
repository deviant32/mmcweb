import React from 'react';
import { Container, Jumbotron, Card, CardText, Button, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';



const GrowthReinventedPage = () => {

  const params = {
    direction: 'vertical',
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };

  return (
    <Meta>
      <Head>
        <title>MMC Web</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />
      </Head>
      <Header />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <Container className="mb-0 position-relative" style={{ height: 400, top: -50 }}>
        <Row>
          <Col xs="12">
            <Swiper {...params}>
              <div
                className="bg-primary text-center text-white d-table pb-5 pt-5"
                style={{
                  height: 200,
                  backgroundImage: 'url(/static/img/shapes/arrow-down.svg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                <div className="d-table-cell align-middle" style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                  <h5 className="sub-heading text-uppercase pt-3">The sales process is ready for</h5>
                  <h1 className="pt-0 font-weight-bold" style={{ fontSize: '4.2rem' }}>Reinvention</h1>
                </div>
              </div>
              <div>Slide 2</div>
              <div>Slide 3</div>
              <div>Slide 4</div>
              <div>Slide 5</div>
            </Swiper>
          </Col>
        </Row>
      </Container>
      <Jumbotron fluid className='bg-white text-primary mb-0 mt-4'>
        <Container className="text-center">
          <Row>
            <Col md={{ size: 10, offset: 1 }} className="pl-5 pr-5">
              <h2 className="pb-3 font-weight-bold" style={{ lineHeight: '3rem' }}>
                We pave the path to transformative growth for maverick business leaders who want
                to lead on the front lines of change and put the customer at the center of their business.
              </h2>
              <p className='text-secondary pt-5' style={{ lineHeight: '2rem' }}>
                MMC increases the effectiveness of your inside sales force to manage and grow that 87%
                <br />
                of your customer relationships and beyond.  You don't have to invest in additional
                <br />
                platforms or technology, or train additional people. Our platform simply and effectively
                 <br />
                targets your existing ERP data to increase your bottom line.  It really is that simple.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container className="bg-secondary mt-0 text-white" fluid>
        <Container>
          <Row className="pt-5">
            <Col className="pt-3" style={{ borderTop: 'thin solid rgba(255, 255, 255, .25)' }}>
              <h2 className="text-center font-weight-bold">How do we do it?</h2>
            </Col>
          </Row>
          <Row className="pt-3 pb-5">
            <Col style={{ borderTop: 'thin solid rgba(255, 255, 255, .25)', borderBottom: 'thin solid rgba(255, 255, 255, .25)' }} xs="12" sm="6" md="4">
              <Card body inverse color="secondary" className="text-center">
                <CardText>
                  <h2 className="eyebrow text-uppercase text-nowrap" style={{ lineHeight: '50% !important', minHeight: 230 }}>
                    We start by using
                    <br />
                    your existing data
                  </h2>
                  <p className="pt-4 pb-4">
                    To create a complete view of the customer ecosystem, illuminating the 87% that are hardest to reach.
                  </p>
                </CardText>
              </Card>
            </Col>
            <Col style={{ borderTop: 'thin solid rgba(255, 255, 255, .25)', borderBottom: 'thin solid rgba(255, 255, 255, .25)' }} xs="12" sm="6" md="4">
              <Card body inverse color="secondary" className="text-center">
                <CardText>
                  <h2 className="eyebrow text-uppercase text-nowrap" style={{ lineHeight: '50% !important', minHeight: 230 }}>
                    Transform
                    <br />
                    disengaged
                    <br />
                    buyers into brand
                    <br />
                    advocates
                  </h2>
                  <p className="pt-4 pb-4">
                    With a blend of leading data, creative, and technology, we design, execute and manage tailored omnichannel growth strategies.
                  </p>
                </CardText>
              </Card>
            </Col>
            <Col style={{ borderTop: 'thin solid rgba(255, 255, 255, .25)', borderBottom: 'thin solid rgba(255, 255, 255, .25)' }} xs="12" sm="6" md="4">
              <Card body inverse color="secondary" className="text-center">
                <CardText>
                  <h2 className="eyebrow text-uppercase text-nowrap" style={{ lineHeight: '50% !important', minHeight: 230 }}>
                    We scale accross
                    <br />
                    accounts and
                    <br />
                    organizations.
                  </h2>
                  <p className="pt-4 pb-4">
                    By partnering with our clients to pioneer integrated sales and marketing programs that create more meaningful connections and sustain ongoing milestones.
                  </p>
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="text-center">
              <p className="font-weight-bold">Get the details.</p>
              <a href="yahoo.com"><u>See our Core Technology for more on Channel 80/20 and our Next Action Platform.</u></a>
            </Col>
          </Row>
        </Container>
      </Container>
      <Jumbotron fluid className='bg-white text-primary mb-0 mt-0'>
        <Container className="text-center bg-circle">
          <Row>
            <Col md={{ size: 10, offset: 1 }} className="pl-5 pr-5 mx-auto" style={{ maxWidth: 850 }}>
              <h2 className="pb-3 font-weight-bold" style={{ lineHeight: '3rem' }}>
                We create relationships that
                <br />
                accelerate success
              </h2>

              <p className="text-secondary pt-5" style={{ lineHeight: '2rem' }}>
                Our solution starts and ends with data, but data is nothing without the relationships and
                <br />
                grounding to make it actionable. We put your customers' needs and behaviors at the heart
                 <br />
                of our process, creating targeted strategies that leave no stone unturned.
              </p>
              <h5
                className="sub-heading text-uppercase mt-5 mb-5 pt-2 pb-2"
                style={{
                  borderTop: 'thin solid #979797',
                  borderBottom: 'thin solid #979797',
                  backgroundColor: 'white'
                }}
              >
                But we know it's all talk until you see it in action.
              </h5>
              <p className="font-weight-bold text-secondary">
                Talk with a member of the MMC team, and let us show you how we can reinvent
                <br />
                growth for you, today.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <CallToAction />
      <Footer />
    </Meta>
  );
}

export default GrowthReinventedPage;
