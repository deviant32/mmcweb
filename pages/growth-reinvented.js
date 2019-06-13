import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';
import ColumnCallout from '../components/views/partials/column-callout';
import SubHeading from '../components/views/partials/sub-heading';
import Title from '../components/views/partials/title';
import StatisticLayout from '../components/views/partials/statistic-layout';



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
      <Container fluid className="mb-5">
        <Row>
          <Col xs="12" className="pl-0 pr-0">
            <Swiper {...params}>
              <div
                className="bg-secondary text-center text-white d-table pb-5 pt-5"
                style={{
                  height: 200,
                  backgroundImage: 'url(/static/img/shapes/arrow-down.svg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                <div className="d-table-cell align-middle" style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                  <h6 className="eyebrow text-uppercase pt-3">The sales process is ready for</h6>
                  <Title>Reinvention</Title>
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
      <StatisticLayout
        className="text-primary"
        heading="For the typical mmc client"
        stat1="80%"
        description1="of sales come from"
        stat2="55%"
        description2="of their sales reps"
        summary="Growing their top accounts at 6% per year."
      />
      <Container className="bg-primary mt-0 text-white" fluid>
        <Container>
          <Row className="pt-5">
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
              <Link href="/core-technology" passHref>
                <a href>
                  <u>
                    See our Core Technology for more on Channel 80/20 and our Next Action Platform.
                  </u>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>

      <CallToAction />
      <Footer />
    </Meta>
  );
}

export default GrowthReinventedPage;
