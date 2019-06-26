import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label, Form, FormGroup, Row, Col } from 'reactstrap';

import { Header, Footer, Healthcare, Building } from './partials';
import { CallToAction, TitleBlock } from '../components';


const CaseStudies = () => {

  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('HEALTHCARE');

  return (
    <React.Fragment>
      <Head>
        <title>Case Studies</title>
      </Head>
      <Header />
      <img style={{ position: 'absolute', left: -50, marginTop: 250, }} src="/static/img/abstract/square-yellow.svg" alt="circle" />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <TitleBlock eyebrow="Case Studies" title="Our work">
        <p>
          Across Industries our platform accelerates growth at an
          average of 20% Year-over-year, turning the under-performing
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
      {dropdownValue === 'HEALTHCARE' && <Healthcare />}
      {dropdownValue === 'BUILDING PRODUCTS' && <Building />}
      <CallToAction />
      <Footer />
    </React.Fragment>
  );
}

export default CaseStudies;
