import React, { useState } from 'react';
import {
  Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label, Form, FormGroup, Row, Col
} from 'reactstrap';
import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';
import Healthcare from '../components/views/partials/healthcare';
import Title from '../components/views/partials/title';


const CaseStudies = () => {

  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('HEALTHCARE');

  return (
    <Meta>
      <Head>
        <title>MMC Web</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />
      </Head>
      <Header />
      <Title>Case Studies</Title>
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
                  <DropdownMenu>
                    <DropdownItem onClick={() => { setDropdownValue('HEALTHCARE') }}><small>HEALTHCARE</small></DropdownItem>
                    <DropdownItem onClick={() => { setDropdownValue('BUILDING') }}><small>BUILDING</small></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      {dropdownValue === 'HEALTHCARE' && <Healthcare />}
      <CallToAction />
      <Footer />
    </Meta>
  );
}

export default CaseStudies;
