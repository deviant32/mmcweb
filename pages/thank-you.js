import React from 'react';
import Head from 'next/head';
import { Container, Row, Col, Card, Button, CardBody, CardTitle, CardFooter } from 'reactstrap';

import { Header, Footer } from './partials';

const ThankYou = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Thank You</title>
      </Head>
      <Header />
      <Container style={{ minHeight: 400 }}>
        <Row>
          <Col xs="12" className="text-center pt-5">
            <h4 className="eyebrow text-uppercase pt-3">Thanks for reaching out.</h4>
            <h2 className="pt-2">We will be in touch shortly!</h2>
            <p style={{ maxWidth: 590 }} className="pt-2 mx-auto">
              In the meantime, please look around and learn more about MMC, including:
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-5 mb-5">
          <Col>
            <Card style={{ height: 180 }} className="p-2">
              <CardBody>
                <CardTitle>WHAT WE DO, AND WHAT WE CAN DO FOR YOU</CardTitle>
              </CardBody>
              <CardFooter>
                <Button outline color="primary">LEARN MORE</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: 180 }} className="p-2">
              <CardBody>
                <CardTitle>OUR TEAM & CULTURE</CardTitle>
              </CardBody>
              <CardFooter>
                <Button outline color="primary">LEARN MORE</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: 180 }} className="p-2">
              <CardBody>
                <CardTitle>WHAT WE DO, AND WHAT WE CAN DO FOR YOU</CardTitle>
              </CardBody>
              <CardFooter>
                <Button outline color="primary">JOBS AT MMC</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default ThankYou;
