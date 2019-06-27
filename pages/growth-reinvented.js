/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from './partials/header';
import Footer from './partials/footer';
import CallToAction from '../components/call-to-action';
import StatisticLayout from '../components/statistic-layout';
import Eyebrow from '../components/eyebrow';
import Title from '../components/title';
import SubHeading from '../components/sub-heading';


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
              <Container className="pt-3 pb-3 bg-secondary border-top border-bottom border-warning">
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
                summary="Using your existing data."
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
            </div>
            <div key={5} className="section bg-secondary text-info text-center">
              <Container fluid className="pt-5 pb-5">
                <Container className="pt-5 pb-5">
                  <div className="border-top border-bottom border-warning">
                    <Eyebrow>That&apos;s what we do</Eyebrow>
                    <Title>That&rsquo;s Growth, Reinvented</Title>
                  </div>
                  <div style={{ maxWidth: 660 }} className="mx-auto">
                    <SubHeading className="mt-5">
                      We&rsquo;re building customer relationships that are designed to thrive in the new era of business.
                    </SubHeading>
                    <p className="mb-1">
                      MMC is the secret weapon you’ve never heard of, a growth accelerator that
                      turns untapped potential into sustainable, authentic growth.
                    </p>
                    <img src="/static/img/abstract/down-triangle.svg" alt="down" />
                    <SubHeading className="mt-1">
                      We pave the path to transformative growth for maverick business leaders who want to lead on the front lines of
                      change and put the customer at the center of their business.
                    </SubHeading>
                    <p>
                      MMC challenges the conventional sales approach to grow the 87% of customer relationships that businesses leave untapped.
                      Armed with an advanced analytics platform, we work as an extension of your inside sales team to target new customers and increase your bottom line.
                    </p>
                  </div>
                </Container>
              </Container>
              <Container className="text-center text-primary pt-5 pb-5" fluid style={{ backgroundColor: '#dcdddc' }}>
                <Container>
                  <Row className="row-border-top">
                    <Title className="text-center mx-auto pt-4">How do we do it?</Title>
                  </Row>
                  <Row className="row-border pt-5 pb-5">
                    <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0">
                      <h4 style={{ height: 75 }}>
                        We start by using
                        <br />
                        your existing data
                      </h4>
                      <p className="text-secondary pt-5 pb-0">
                        We create a complete view of your customer ecosystem, illuminating the 87% of customers that are hardest to reach.
                      </p>
                    </Col>
                    <Col xs={12} md={4} className="res-border-right pb-5 pb-md-0">
                      <h4 style={{ height: 75 }}>
                        We turn disengaged
                        <br />
                        buyers into brand
                        <br />
                        advocates
                      </h4>
                      <p className="text-secondary pt-5 pb-0">
                        With a blend of leading data, creative, and technology, we design, execute and manage tailored omnichannel growth strategies.
                      </p>
                    </Col>
                    <Col xs={12} md={4} className="pb-0">
                      <h4 style={{ height: 75 }}>
                        We deliver
                        <br />
                        growth at scale
                      </h4>
                      <p className="text-secondary pt-5 pb-0">
                        We partner with our clients to pioneer integrated sales and marketing programs that create more meaningful connections and sustain ongoing milestones.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Container>
              <CallToAction headline="Experience MMC in action!" body="Let us show you how we can tailor solutions your unique business and goals." />
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </React.Fragment>
  );
}

export default GrowthReinventedPage;
