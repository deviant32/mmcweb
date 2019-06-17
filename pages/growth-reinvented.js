/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import ReactFullpage from '@fullpage/react-fullpage';

import '../styles/base.scss';

import Header from '../components/views/partials/header';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';
import ColumnCallout from '../components/views/partials/column-callout';
import StatisticLayout from '../components/views/partials/statistic-layout';
import Eyebrow from '../components/views/partials/eyebrow';
import Statistic from '../components/views/partials/statistic';



const GrowthReinventedPage = () => {

  return (
    <React.Fragment>
      <Head>
        <title>MMC Web</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />
      </Head>
      <Header />
      <ReactFullpage
        menu='#menu'
        navigation
        paddingTop='75px'
        allowScrolling
        // eslint-disable-next-line no-unused-vars
        render={comp => (
          <ReactFullpage.Wrapper>
            <div key={1} className="section bg-secondary text-info text-center bg-growth-reinvented">
              <Container className="pt-3 pb-3 bg-secondary" style={{ borderTop: 'thin solid #EBE83A', borderBottom: 'thin solid #EBE83A' }}>
                <Eyebrow>The sales process is ready for</Eyebrow>
                <h1 className="h2">Reinvention</h1>
              </Container>
              <img src="/static/img/abstract/triangle.svg" alt="down" />
            </div>
            <div key={2} className="section bg-white text-primary text-center">
              <h4 className="pb-5">For The Typical MMC Client...</h4>
              <Row>
                <Col xs="12" sm="6" className="border-right border-primary">
                  <Statistic value="80">
                    80% of their sales comes
                  </Statistic>
                </Col>
                <Col xs="12" sm="6">
                  <Statistic value="13">
                    from 13% of their accounts
                  </Statistic>
                </Col>
              </Row>
            </div>
            <div key={3} className="section bg-secondary text-info text-center">
              <h1>For The Typical MMC Client...</h1>
            </div>
            <div key={4} className="section bg-primary text-primary text-center">
              <Container className="bg-primary mt-0 pt-0 text-white" fluid>
                <Container className="h-100">
                  <Row className="pt-0 my-auto">
                    <Col
                      className="pt-4 pb-3"
                      style={{ borderTop: 'thin solid rgba(255, 255, 255, .25)', borderBottom: 'thin solid rgba(255, 255, 255, .25)' }}
                    >
                      <h2 className="h4 text-center font-weight-bold">How do we do it?</h2>
                    </Col>
                  </Row>
                  <Row
                    className="mt-3 mb-5"
                    style={{
                      borderBottom: 'thin solid rgba(255, 255, 255, .25)'
                    }}
                  >
                    <Col className="pt-4 pb-4" xs="12" sm="12" md="4">
                      <ColumnCallout
                        className="res-border-right"
                        title={(
                          <React.Fragment>
                            We start by using
                            <br />
                            your existing data
                          </React.Fragment>
                        )}
                        description="To create a complete view of the customer ecosystem, illuminating the 87% that are hardest to reach."
                      />
                    </Col>
                    <Col className="pt-4 pb-4" xs="12" sm="12" md="4">
                      <ColumnCallout
                        className="res-border-right"
                        title={(
                          <React.Fragment>
                            Transform
                            <br />
                            disengaged
                            <br />
                            buyers into brand
                            <br />
                            advocates
                          </React.Fragment>
                        )}
                        description="With a blend of leading data, creative, and technology, we design, execute and manage tailored omnichannel growth strategies."
                      />
                    </Col>
                    <Col className="pt-4 pb-4" xs="12" sm="12" md="4">
                      <ColumnCallout
                        title={(
                          <React.Fragment>
                            We scale accross
                            <br />
                            accounts and
                            <br />
                            organizations.
                          </React.Fragment>
                        )}
                        description="By partnering with our clients to pioneer integrated sales and marketing programs that create more meaningful connections and sustain ongoing milestones."
                      />
                    </Col>
                  </Row>
                  <Row className="pb-5">
                    <Col className="text-center">
                      <p className="font-weight-bold">Get the details.</p>
                      <Link href="/core-technology">
                        <a>
                          <u>
                            See our Core Technology for more on Channel 80/20 and our Next Action Platform.
                          </u>
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
            <div key={5} className="section bg-primary text-white text-center">
              <h1>Test</h1>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
      <StatisticLayout
        style={{ scrollSnapAlign: 'start' }}
        className="text-primary"
        heading="For the typical mmc client"
        stat1="80%"
        description1="of sales come from"
        stat2="55%"
        description2="of their sales reps"
        summary="Growing their top accounts at 6% per year."
      />


      <CallToAction />
      <Footer />
    </React.Fragment>
  );
}

export default GrowthReinventedPage;
