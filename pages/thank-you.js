import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col, Card, Button, CardBody, CardTitle, CardFooter } from 'reactstrap';

import { Header, Footer } from '../components/partials';

const ThankYou = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Thank You</title>
      </Head>
      <Header />
      <Container style={{ minHeight: '60vh' }}>
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
          <Col xs="12" sm="12" md="4" className="mb-5 mb-md-0">
            <Card style={{ height: 180 }} className="p-2">
              <CardBody>
                <CardTitle>What we do, and what we can do for you</CardTitle>
              </CardBody>
              <CardFooter>
                <Link href="/capabilities">
                  <Button outline color="primary">Meet MMC</Button>
                </Link>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="4" className="mb-5 mb-md-0">
            <Card style={{ height: 180 }} className="p-2">
              <CardBody>
                <CardTitle>Our team & culture</CardTitle>
              </CardBody>
              <CardFooter>
                <Link href="/team">
                  <Button outline color="primary">Get to know MMC</Button>
                </Link>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="4" className="mb-5 mb-md-0">
            <Card style={{ height: 180 }} className="p-2">
              <CardBody>
                <CardTitle>Are you ready to take the next step in your career?</CardTitle>
              </CardBody>
              <CardFooter>
                <Link href="/team">
                  <Button outline color="primary">JOBS AT MMC</Button>
                </Link>
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
