/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';

import { Header, Footer, Quote } from './partials';
import { CallToAction, TitleBlock, SubHeading, TeamPanel, Title } from '../components';


const Team = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Team</title>
      </Head>
      <Header />
      <Container className="bg-team" style={{ height: 300 }} fluid />
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
            <img className="img-fluid mb-5" alt="Community & Values" src="/static/img/team/team.jpg" />
            <SubHeading className="text-primary">MMC Commuinity & Values</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              Investing in our people goes beyond work, to investing in who we are
            </p>
            <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>Learn More</Button>
          </Col>
          <Col md="4" className="mb-5 pl-1 pr-1">
            <img className="img-fluid mb-5" alt="Careers at MMC" src="/static/img/team/careers.jpg" />
            <SubHeading className="text-primary">Careers at MMC</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              From creative storytellers to deep data magicians, we&apos;re looking for great people to join the team, wherever you are.
              Are you ready to take the next step in your career?
            </p>
            <Link href="https://recruiting.ultipro.com/MOD1007MDRN/JobBoard/878dbef4-95e7-a042-ddfc-997e388fe644/?q=&o=postedDateDesc&w=&wc=&we=&wpst=">
              <a target="_blank">
                <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>Learn More</Button>
              </a>
            </Link>
          </Col>
          <Col md="4" className="mb-5 pl-2">
            <img className="img-fluid mb-5" alt="Employee Tools" src="/static/img/team/tools.jpg" />
            <SubHeading className="text-primary">Employee Tools & Access</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              Existing MMC employees can access information including training and onboarding resources, and other information here.
            </p>
            <Link href="https://ew41.ultipro.com/Login.aspx">
              <a target="_blank">
                <Button outline color="secondary text-uppercase" style={{ width: '90%' }}>Access Ultipro</Button>
              </a>
            </Link>
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
