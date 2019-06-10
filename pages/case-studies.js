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



const CaseStudies = () => {

  const [dropdownState, setDropdownState] = useState(false);

  return (
    <Meta>
      <Head>
        <title>MMC Web</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />
      </Head>
      <Header />
      <h1 className="h2 text-center text-primary font-weight-bold pt-5 pb-3 mt-4">Case Studies</h1>
      <Container className="mb-5">
        <Row>
          <Col>
            <Form inline>
              <FormGroup className="mx-auto">
                <Label className="mr-2 font-weight-normal">FILTER BY:</Label>
                <Dropdown isOpen={dropdownState} toggle={() => setDropdownState(!dropdownState)}>
                  <DropdownToggle caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>HEALTHCARE</DropdownItem>
                    <DropdownItem>BUILDING</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="bg-success mx-auto" style={{ maxWidth: '70vw', minHeight: 500 }}>

            </div>
          </Col>
        </Row>
      </Container>

      <CallToAction />
      <Footer />
    </Meta>
  );
}

export default CaseStudies;
