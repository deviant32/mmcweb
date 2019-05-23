import React from 'react';
import { Jumbotron, Container, Row, Col, Card, CardBody, CardText, CardTitle, CardFooter, Button } from 'reactstrap';
import '../../styles/base.scss';


function Home() {
  return (
    <div>
      <Container>
        <Row className="h-100">
          <Col xs="12" sm="12" md="6" className="my-auto">
            <h6 className="mb-2 mt-3 mt-sm-3 eyebrow text-uppercase">Let&apos;s Talk About</h6>
            <h1>
              Growth
              <br />
              in a whole
              <br />
              new light.
            </h1>
            <Button className="mt-4 rounded-0" outline color="dark">GET TO KNOW US</Button>
          </Col>
          <Col xs="12" sm="12" md="6" className="mt-3 mt-sm-3 mt-md-0">
            <img alt="Title" className="img-fluid" src="static/img/600x600.png" />
          </Col>
        </Row>
      </Container>
      <Jumbotron fluid className='blue-bg'>
        <Container className="text-center">
          <Row className="mb-3">
            <Col md={{ size: 6, offset: 3 }}>
              <h2 className="mb-4">Growth, Reinvented.</h2>
              <h6 className="text-uppercase mb-4 font-weight-bold">
                The path to authentic sales growth is constantly changing and evolving. With over 32 years in business
                we know that what worked in the past doesn&apos;t always translate to today&apos;s business needs.
              </h6>
              <p>
                At MMC we help our clients uncover hidden potential within their existing data and create authentic, sustainable growth.
                With over $2.5BN worth of client revenue managed annually, at an average of 20% growth year-over-year.
                MMC is the secret weapon for business leaders who don&apos;t leave anything to chance.
                Let us show you how we do it, tell you the stories of clients we&apos;ve done it for, and show you what we mean by: &#34;Growth&#44; Reinvented&#34;.
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: 150 }} className="pb-5">
            <Col className="mb-3" xs="12" sm="12" md="12" lg="4">
              <Card className="p-3 rounded-0" style={{ minHeight: 390 }}>
                <CardTitle>
                  <div className="circle">
                    <p>WHAT WE DO</p>
                  </div>
                </CardTitle>
                <CardBody>
                  <CardText style={{lineHeight: '24px'}}>
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
              <Card className="p-3 rounded-0" style={{ minHeight: 390 }}>
                <CardTitle>
                  <div className="circle">
                    <p>WHO WE ARE</p>
                  </div>
                </CardTitle>
                <CardBody>
                  <CardText style={{lineHeight: '24px'}}>
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
              <Card className="p-3 rounded-0" style={{ minHeight: 390 }}>
                <CardTitle>
                  <div className="circle">
                    <p>HOW WE DO IT</p>
                  </div>
                </CardTitle>
                <CardBody>
                  <CardText style={{lineHeight: '24px'}}>
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
      <Container className="text-center">
        <h3>You&apos;ll be in good company.</h3>
        <p className="text-uppercase">
          With over $2.5bn in client accounts, MMC olor site amet, consectetur adipiscing elit, sed do euismod tempor incididunt ut labore et dolore mange aliqua
        </p>
      </Container>
    </div>
  )
}

export default Home;
