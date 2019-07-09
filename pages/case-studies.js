import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label, Form, FormGroup, Row, Col } from 'reactstrap';

import { Header, Footer } from '../components/partials';
import { CallToAction, TitleBlock } from '../components';
import sanity from '../client';
import CaseStudyOverview from '../components/partials/case-studies/overview';


const buildingQuery =
  `*[_type == "case_study"
      && vertical._ref in *[_type=="vertical" && name == "Building Products"]._id] {
  _id,
  publishedAt,
  "slug": slug.current,
  title,
  category,
  summary,
  "main_image": main_image.asset->url
} | order(_publishedAt desc) [0...5]`;

const healthcareQuery =
  `*[_type == "case_study"
      && vertical._ref in *[_type=="vertical" && name == "Healthcare"]._id] {
  _id,
  publishedAt,
  "slug": slug.current,
  title,
  category,
  summary,
  "main_image": main_image.asset->url
} | order(_publishedAt desc) [0...5]`;

const CaseStudies = ({ building, healthcare }) => {

  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('BUILDING PRODUCTS');

  return (
    <React.Fragment>
      <Head>
        <title>Marketing & Sales Growth Case Studies | Modern Marketing & Commerce: MMC</title>
        <meta
          name="description"
          content="See how we accelerate growth at an average of 20% year-over-year, turning the under-performing end of your client list into the top line."
        />
        <meta
          name="robots"
          content="index,follow"
        />
      </Head>
      <Header />
      <img style={{ position: 'absolute', left: -50, marginTop: 250, }} src="/static/img/abstract/square-yellow.svg" alt="circle" />
      <Container className="bg-case-studies" style={{ height: 300 }} fluid />
      <TitleBlock eyebrow="Case Studies" title="Our Work">
        <p>
          Our platform accelerates growth at an
          average of 20% year-over-year, turning the under-performing
          end of your client list into the top line.
        </p>
      </TitleBlock>
      <Container className="mb-5">
        <Row>
          <Col>
            <Form inline>
              <FormGroup className="mx-auto">
                <Label className="mr-2 small font-weight-normal">SORT BY:</Label>
                <Dropdown isOpen={dropdownState} toggle={() => setDropdownState(!dropdownState)}>
                  <DropdownToggle outline caret>
                    <small className="font-weight-bold">{dropdownValue}</small>
                  </DropdownToggle>
                  <DropdownMenu style={{ border: 'thin solid black !important;' }}>
                    <DropdownItem onClick={() => { setDropdownValue('HEALTHCARE') }}><small>HEALTHCARE</small></DropdownItem>
                    <DropdownItem onClick={() => { setDropdownValue('BUILDING PRODUCTS') }}><small>BUILDING PRODUCTS</small></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      {dropdownValue === 'HEALTHCARE' && <CaseStudyOverview data={healthcare} />}
      {dropdownValue === 'BUILDING PRODUCTS' && <CaseStudyOverview data={building} />}
      <CallToAction headline="Are you a maverick?" body="When the rules have completely changed, the key to getting ahead is to challenge convention." />
      <Footer />
    </React.Fragment>
  );
}

CaseStudies.getInitialProps = async () => {
  const buildingRes = await sanity.fetch(buildingQuery);
  const healthcareRes = await sanity.fetch(healthcareQuery);

  return { building: buildingRes, healthcare: healthcareRes };
}


export default CaseStudies;
