import React, {useState} from 'react';
import { Container, Row, Col, Button, Card, CardText, CardBody, Collapse } from 'reactstrap';
import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import '../styles/base.scss';


const Typography = () => {

  const [collapse, setCollapse] = useState(false);

  return (
    <Meta>
      <Head>
        <title>MMC Web</title>
      </Head>
      <Header />
      <Container>
        <Row>
          <Col xs="12" sm="6" className="mt-5">
            <h1 className="text-primary">Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <hr />
            <h1 className="eyebrow text-primary">H1 Eyebrow</h1>
            <h2 className="eyebrow">H2 Eyebrow</h2>
            <h3 className="eyebrow">H3 Eyebrow</h3>
            <h4 className="eyebrow">H4 Eyebrow</h4>
            <h5 className="eyebrow">H5 Eyebrow</h5>
            <h6 className="eyebrow">H6 Eyebrow</h6>
          </Col>
          <Col xs="12" sm="6" className="mt-5">
            <h3 className="text-center">Paragraph text</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ul>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
              <li>List Item 4</li>
              <li>List Item 5</li>
            </ul>

            <ol>
              <li>List Item 1</li>
              <li>List Item 2</li>
              <li>List Item 3</li>
              <li>List Item 4</li>
              <li>List Item 5</li>
            </ol>
            <Button className="mt-4 mr-5" outline color="primary">Primary outline</Button>
            <Button className="mt-4 mr-5" outline color="secondary">Secondary outline</Button>
            <Button className="mt-4" outline color="warning">Warning outline</Button>

          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mt-5 mb-5 bg-secondary p-5">
          <Col xs="12" sm="6" md="4">
            <Card body inverse color="secondary" className="p-4 border border-warning text-center">
              <CardText>
                <h6>
                  Aim for a Clear
                  <br />
                  Target with Evolved
                  <br />
                  Marketing
                </h6>
                <p>With supporting text below as a natural lead-in to additional content.</p>
                <a href="yahoo.com" className="text-warning">READ MORE -></a>
              </CardText>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card body inverse color="secondary" className="p-4 border border-warning text-center">
              <CardText>
                <h6>
                  Aim for a Clear
                  <br />
                  Target with Evolved
                  <br />
                  Marketing
                </h6>
                <p>With supporting text below as a natural lead-in to additional content.</p>
                <a href="yahoo.com" className="text-warning">READ MORE -></a>
              </CardText>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card body inverse color="secondary" className="p-4 border border-warning text-center">
              <CardText>
                <h6>
                  Aim for a Clear
                  <br />
                  Target with Evolved
                  <br />
                  Marketing
                </h6>
                <p>With supporting text below as a natural lead-in to additional content.</p>
                <a href="yahoo.com" className="text-warning">READ MORE -></a>
              </CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" onClick={() => setCollapse(!collapse)} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={collapse}>
              <Card>
                <CardBody>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </Meta>
  );
}

export default Typography;
