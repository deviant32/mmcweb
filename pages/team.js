/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'reactstrap';

import { Header, Footer, Quote } from '../components/partials';
import { CallToAction, TitleBlock, SubHeading, TeamPanel, Title } from '../components';
import sanity from '../client';


const Team = ({ employees }) => {


  return (
    <React.Fragment>
      <Head>
        <title>MMC Team, Community, & Values | Modern Marketing & Commerce: MMC</title>
        <meta
          name="description"
          content="See how MMC is reinventing the way we work together every day, focusing on what matters & removing anything that stands in the way."
        />
        <meta
          name="robots"
          content="index,follow"
        />
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
          to focus on what really matters, determining success not by office hours, but by results for
          our clients, and removing anything that stands in the way.
        </p>
      </TitleBlock>
      <Container className="p-0">
        <Row className="mx-auto text-center no-gutters">
          <Col md="6" className="mb-5 pr-2">
            <img className="img-fluid mb-5" alt="Community & Values" src="/static/img/team/community.jpg" />
            <SubHeading className="text-primary">MMC Community & Values</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              Investing in our people goes beyond work, to investing in who we are.
            </p>
            <Link href="/community">
              <a>
                <Button color="primary text-uppercase">Get to know us</Button>
              </a>
            </Link>
          </Col>
          <Col md="6" className="mb-5 pl-1 pr-1">
            <img className="img-fluid mb-5" alt="Careers at MMC" src="/static/img/team/careers.jpg" />
            <SubHeading className="text-primary">Careers at MMC</SubHeading>
            <p style={{ lineHeight: '200%', minHeight: 160 }}>
              From creative storytellers to deep data magicians, we&apos;re looking for great people to join the team, wherever you are.
              Are you ready to take the next step in your career?
            </p>
            <Link href="https://recruiting.ultipro.com/MOD1007MDRN/JobBoard/878dbef4-95e7-a042-ddfc-997e388fe644/?q=&o=postedDateDesc&w=&wc=&we=&wpst=">
              <a rel="noopener" target="_blank">
                <Button color="primary text-uppercase">Join the team</Button>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container className="text-center pb-5 mb-5 mt-5">
        <Title className="text-primary pb-4">Our team is your team</Title>
        <TeamPanel employees={employees} size={12} />
      </Container>
      <Quote />
      <CallToAction headline="Join our growth team!" body="We are lifelong learners, equipping one another with the tools and resources to continuously grow." />
      <Footer />
    </React.Fragment>
  );
}

Team.getInitialProps = async () => {
  const employees = await sanity.fetch(`*[_type == "employee"] {
    _id,
    _type,
    "headshot": headshot.asset->url
  }`);
  return { employees: employees };
};

export default Team;
