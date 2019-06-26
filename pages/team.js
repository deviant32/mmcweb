import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Head from 'next/head';

import { Header, Footer, Quote } from './partials';
import { CallToAction, TitleBlock, SubHeading, TeamPanel, Title } from '../components';


const Team = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Team</title>
      </Head>
      <Header />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <TitleBlock
        eyebrow="The MMC Growth Team"
        title={(
          <span>
            We&rsquo;re Reinventing How We
            <br />
            Work Together
          </span>
        )}
      >
        <p>
          At MMC, &quot;Growth, Reinvented&quot; isn&rsquo;t just about growing our clients&rsquo; business, it&rsquo;s about
          investing in the people we work with every day.  We&rsquo;re reinventing how we work together
          to focus on what really matters, determining success not by office hours but by results for
          our clients, and removing anything that stands in the way.
        </p>
      </TitleBlock>
      <Container className="p-0">
        <Row className="mx-auto text-center no-gutters">
          <Col md="4" className="mb-5 pr-2">
            <img className="img-fluid mb-5" alt="dummy" src="https://dummyimage.com/350x350/000/fff" />
            <SubHeading className="text-primary">MMC Commuinity & Values</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              Investing in our people goes beyond work, to investing in who we are
            </p>
            <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>Read our case studies</Button>
          </Col>
          <Col md="4" className="mb-5 pl-1 pr-1">
            <img className="img-fluid mb-5" alt="dummy" src="https://dummyimage.com/350x350/000/fff" />
            <SubHeading className="text-primary">Careers at MMC</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              From creative storytellers to deep data magicians, we&apos;re looking for great people to join the team, wherever you are.
              Are you ready to take the next step in your career?
            </p>
            <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>See our capabilities</Button>
          </Col>
          <Col md="4" className="mb-5 pl-2">
            <img className="img-fluid mb-5" alt="dummy" src="https://dummyimage.com/350x350/000/fff" />
            <SubHeading className="text-primary">Employee Tools & Access</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              Existing MMC employees can access information including training and onboarding resources, and other information here.
            </p>
            <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>Access Ultipro</Button>
            <br />
            <small>(Employee Sign-in Required)</small>
          </Col>
        </Row>
      </Container>
      <Container className="text-center pb-5 mb-5 mt-5">
        <Title className="text-primary pb-4">Our team is your team</Title>
        <TeamPanel size={12} />
      </Container>
      <Quote />
      <CallToAction />
      <Footer />
    </React.Fragment>
  );
}

export default Team;
