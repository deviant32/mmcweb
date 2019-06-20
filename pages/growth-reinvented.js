/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';
import ReactFullpage from '@fullpage/react-fullpage';

import '../styles/base.scss';

import Header from '../components/views/partials/header';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';
import StatisticLayout from '../components/views/partials/statistic-layout';
import Eyebrow from '../components/views/partials/eyebrow';


const GrowthReinventedPage = () => {

  // NOTE: if using fullpage extensions/plugins put them here and pass it as props
  const pluginWrapper = () => {
    require('fullpage.js/vendors/scrolloverflow');
  };

  const fullpageOptions = {
    pluginWrapper: pluginWrapper,
    scrollOverflow: true
  };

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
        {...fullpageOptions}
        // eslint-disable-next-line no-unused-vars
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div key={1} className="section bg-secondary text-info text-center bg-growth-reinvented">
              <Container className="pt-3 pb-3 bg-secondary" style={{ borderTop: 'thin solid #EBE83A', borderBottom: 'thin solid #EBE83A' }}>
                <Eyebrow>The sales process is ready for</Eyebrow>
                <h1 className="h2">Reinvention</h1>
              </Container>
              <img src="/static/img/abstract/triangle.svg" alt="down" />
            </div>
            <div key={2} className="section bg-white text-primary text-center">
              <StatisticLayout
                heading="For the typical MMC client..."
                summary="And the other 87% are declining at 2% per year."
                color="primary"
                summaryColor="secondary"
                stats={[
                  {
                    number: 80,
                    image: '80-percent-green',
                    description: '80% of their sales comes'
                  },
                  {
                    number: 13,
                    image: '13-percent-green',
                    description: 'from 13% of their accounts'
                  }
                ]}
              />
            </div>
            <div key={3} className="section bg-secondary text-info text-center">
              <StatisticLayout
                heading="For the typical MMC client..."
                summary="Growing their top accounts at 6% per year."
                color="white"
                summaryColor="white"
                stats={[
                  {
                    number: 80,
                    image: '80-percent-yellow',
                    description: '80% of their sales comes'
                  },
                  {
                    number: 55,
                    image: '55-percent-yellow',
                    description: 'from 55% of their sales reps'
                  }
                ]}
              />
            </div>
            <div key={4} className="section text-center">

              <StatisticLayout
                heading="For the typical MMC client..."
                summary="Using your existing data"
                color="primary"
                summaryColor="secondary"
                stats={[
                  {
                    number: 87,
                    image: '87-percent-green',
                    description: 'We take the other 87% and'
                  },
                  {
                    number: 13,
                    image: '13-percent-green',
                    description: 'Turn it into 20% YOY Growth'
                  }
                ]}
              />
              {/* <Container className="h-100 bg-light mt-0 pt-0 text-primary" fluid>
                <Container className="my-auto">
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
              </Container> */}
            </div>
            <div key={5} className="section text-center">
              <CallToAction />
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </React.Fragment>
  );
}

export default GrowthReinventedPage;
