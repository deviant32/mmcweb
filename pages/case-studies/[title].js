
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';

import { Header, Footer } from '../../components/partials';
import { CallToAction, Title, SubHeading, Eyebrow } from '../../components';

import sanity from '../../client';

const CaseStudy = ({ sub_heading, title, at_a_glance, results, challenge_text, solution_text, results_text }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={challenge_text}
        />
        <meta
          name="robots"
          content="index,follow"
        />
      </Head>
      <Header />
      <Container className="text-center bg-info p-5 mt-5">
        <Eyebrow className="font-weight-bold">
          {sub_heading}
        </Eyebrow>
        <Title className="text-primary">
          {title}
        </Title>
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
            <p>{at_a_glance[0]}</p>
          </Col>
          <Col xs="12" sm="4" className="res-border-right">
            <strong>Target audience</strong>
            <p>{at_a_glance[1]}</p>
          </Col>
          <Col xs="12" sm="4">
            <strong>Size of audience</strong>
            <p>{at_a_glance[2]}</p>
          </Col>
        </Row>

        <SubHeading
          style={{ marginTop: 100 }}
          className="text-primary h6 pb-4 border-bottom border-info"
        >
          Results
                </SubHeading>

        <Row className="pt-4 pb-4 border-bottom border-info">
          {results.map((stat, index) => {
            var width = 12 / results.length;
            return (
              <Col xs="12" sm={width} className={(index !== results.length - 1) ? 'res-border-right' : ''}>
                <span
                  className="align-middle eyebrow font-weight-normal text-primary"
                  style={{ fontSize: '6rem' }}
                >
                  {stat.value}
                </span>
                <p>{stat.description}</p>
              </Col>
            )
          })}
        </Row>
        <Row style={{ marginTop: 100 }}>
          <Col>
            <Title className="text-primary h4">Challenge</Title>
            <div style={{ maxWidth: 650 }} className="mx-auto">
              <p>
                {challenge_text}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Title className="text-primary h4">Solution</Title>
            <div style={{ maxWidth: 650 }} className="mx-auto">
              <p>
                {solution_text}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Title className="text-primary h4">Results</Title>
            <div style={{ maxWidth: 650 }} className="mx-auto">
              <p>
                {results_text}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <CallToAction
        headline="Experience MMC in action!"
        body="Let us show you how we can tailor solutions for your unique business and goals."
      />
      <Footer />
    </React.Fragment>
  );
}

CaseStudy.getInitialProps = async ({ query: { title } }) => {
  return await sanity.fetch('*[_type == "case_study" && slug.current == $title][0]', { title });
};


export default CaseStudy;
