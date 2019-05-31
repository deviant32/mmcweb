/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { Jumbotron, Container, Row, Col, Card, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap';
import '../../styles/base.scss';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../hooks/context';
import DynamicContent from '../dec/dynamic-content';


const Home = () => {

  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <Helmet>
        <title>Home Page Title!</title>
        <meta name="description" content='Description goes here' />
        <meta name="og:image" content='image path' />
      </Helmet>
      <Container>
        <Row className="h-100">
          <Col xs="12" sm="12" md="12" lg="6" className="my-auto">
            <h5 className="mt-0 mb-3 mt-md-3 eyebrow text-uppercase">Let&apos;s Talk About</h5>
            <h1>
              {user.CustomInfo ? user.CustomInfo.contactFirstName.firstName : null}
              <br />
              in a whole
              <br />
              new light.
            </h1>
            <Button className="mt-4 rounded-0" href="/typography" outline color="dark">GET TO KNOW US</Button>
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" className="mt-3 mt-md-3 mt-lg-0">
            <img alt="Title" className="img-fluid" src="/static/img/600x600.png" />
          </Col>
        </Row>
      </Container>
      <DynamicContent package_codes={['joe123']}>
        <Container fluid className="bg-secondary text-white text-center p-4">
          <Row>
            <Col>
              <h3>Hidden content by Package Code</h3>
            </Col>
          </Row>
        </Container>
      </DynamicContent>
      <Jumbotron fluid className='bg-primary text-white'>
        <Container className="text-center">
          <Row className="mb-3">
            <Col md={{ size: 8, offset: 2 }}>
              <h2 className="mb-4">
                The sales process is ready
                <br />
                for transformation.
              </h2>
              <p>
                We&apos;re reinventors at heart, and we work with our clients to help them
                <br />
                change, grow and thrive by focusing on their customers above all else.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 100 }} className="pb-5">
            <Col className="mb-3" xs="12" sm="12" md="12" lg="4">
              <Card className="p-3 rounded-0 text-secondary" style={{ minHeight: 390 }}>
                <CardTitle>
                  <div className="circle">
                    <h5>WHAT WE DO</h5>
                  </div>
                </CardTitle>
                <CardBody>
                  <CardText style={{ lineHeight: '24px' }}>
                    When the rules have completely changed, the key to getting ahead is to challenge convention.
                    See how we identify, target, and scale oppurtunities to help you grow the 87% of your accounts that are the hardest to reach
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Button className="mt-4 rounded-0" outline color="primary">&#34;GROWTH, REINVENTED&#34;</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col className="mb-3" xs="12" sm="12" md="12" lg="4">
              <Card className="p-3 rounded-0 text-secondary" style={{ minHeight: 390 }}>
                <CardTitle>
                  <div className="circle">
                    <h5>WHO WE ARE</h5>
                  </div>
                </CardTitle>
                <CardBody>
                  <CardText style={{ lineHeight: '24px' }}>
                    When the rules have completely changed, the key to getting ahead is to challenge convention.
                    See how we identify, target, and scale oppurtunities to help you grow the 87% of your accounts that are the hardest to reach
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Button className="mt-4  rounded-0" outline color="primary">MEET THE TEAM</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col className="mb-3" xs="12" sm="12" md="12" lg="4">
              <Card className="p-3 rounded-0 text-secondary" style={{ minHeight: 390 }}>
                <CardTitle>
                  <div className="circle">
                    <h5>HOW WE DO IT</h5>
                  </div>
                </CardTitle>
                <CardBody>
                  <CardText style={{ lineHeight: '24px' }}>
                    They say the proof of the pudding is in the tasting.  Our case studies and capabilities documents show how we reinvent growth for our clients every day.
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Button className="mt-4 rounded-0" outline color="primary">READ OUR CASE STUDIES</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container className="text-center mt-5 mb-5">
        <h3 className="text-primary">You&apos;ll be in good company.</h3>
        <p className="text-uppercase">
          With over $2.5bn in client accounts, MMC olor site amet, consectetur adipiscing elit, sed do euismod tempor incididunt ut labore et dolore mange aliqua
        </p>

      </Container>
      <Container fluid className="bg-success text-white pt-5 pb-5 text-center">
        <Row>
          <Col>
            <h1 className="eyebrow">
              JOIN THE TEAM
              <FontAwesomeIcon size="sm" width="0" icon={faArrowRight} />
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Home;
