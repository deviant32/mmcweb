import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';

import { Header, Footer } from '../partials';
import { CallToAction, CollapseList, Title, SubHeading, Eyebrow, TeamPanel } from '../../components';


const Template = (props) => {

  const {
    tagline,
    headline,
    companyType,
    sizeAudience,
    targetAudience,
    stat1,
    stat2,
    stat3,
    challenge,
    solution,
    results
  } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{tagline}</title>
        <meta
          name="description"
          content={challenge}
        />
        <meta
          name="robots"
          content="index,follow"
        />
      </Head>
      <Header />
      <Container className="text-center bg-info p-5 mt-5">
        <Eyebrow className="font-weight-bold">
          {tagline}
        </Eyebrow>
        <Title className="text-primary">
          {headline}
        </Title>
        <div style={{ maxWidth: 650 }} className="mx-auto">
          <p>
            {challenge}
          </p>
        </div>
      </Container>
      <Container className="text-center mt-5 mb-5">
        <SubHeading
          className="text-primary h6 pb-4 border-bottom border-info"
        >
          At a glance
        </SubHeading>
        <Row className="pt-4">
          <Col xs="12" sm="4" className="res-border-right">
            <strong>Company Type</strong>
            <p>{companyType}</p>
          </Col>
          <Col xs="12" sm="4" className="res-border-right">
            <strong>Target audience</strong>
            <p>{targetAudience}</p>
          </Col>
          <Col xs="12" sm="4">
            <strong>Size of audience</strong>
            <p>{sizeAudience}</p>
          </Col>
        </Row>

        <br />
        <br />

        <SubHeading
          className="text-primary h6 pb-4 border-bottom border-info mt-5"
        >
          Results
        </SubHeading>

        <Row className="pt-4 pb-4 border-bottom border-info">
          <Col xs="12" sm="4" className="res-border-right">
            <span
              className="align-middle eyebrow font-weight-normal text-primary"
              style={{ fontSize: '6rem' }}
            >
              {stat1.number}
            </span>
            <p>{stat1.text}</p>
          </Col>
          <Col xs="12" sm="4" className="res-border-right">
            <span
              className="align-middle eyebrow font-weight-normal text-primary"
              style={{ fontSize: '6rem' }}
            >
              {stat2.number}
            </span>
            <p>{stat2.text}</p>
          </Col>
          <Col xs="12" sm="4">
            <span
              className="align-middle eyebrow font-weight-normal text-primary"
              style={{ fontSize: '6rem' }}
            >
              {stat3.number}
            </span>
            <p>{stat3.text}</p>
          </Col>
        </Row>

        <br />
        <br />
        <Row className="mt-5">
          <Col>
            <Title className="text-primary h4">Challenge</Title>
            <div style={{ maxWidth: 650 }} className="mx-auto">
              <p>
                {challenge}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Title className="text-primary h4">Solution</Title>
            <div style={{ maxWidth: 650 }} className="mx-auto">
              <p>
                {solution}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Title className="text-primary h4">Results</Title>
            <div style={{ maxWidth: 650 }} className="mx-auto">
              <p>
                {results}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <CallToAction headline="Experience MMC in action!" body="Let us show you how we can tailor solutions your unique business and goals." />
      <Footer />
    </React.Fragment>
  );
}

export default Template;
