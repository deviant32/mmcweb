import React from 'react';
import {
  Container, Button, ListGroup
} from 'reactstrap';
import Head from 'next/head';
import Header from '../components/views/partials/header';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';
import CallToAction from '../components/views/partials/call-to-action';
import CollapseList from '../components/widgets/collapse-list';
import Title from '../components/views/partials/title';
import SubHeading from '../components/views/partials/sub-heading';
import Eyebrow from '../components/views/partials/eyebrow';
import TeamPanel from '../components/views/partials/team-panel';


const Capabilities = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Our Capabilities</title>
      </Head>
      <Header />
      <Container className="text-center bg-info p-5 mt-4 position-relative" style={{ bottom: -50, zIndex: 100 }}>
        <Eyebrow className="font-weight-bold">
          Connected Intelligence
        </Eyebrow>
        <Title className="text-primary">
          How MMC drives growth
        </Title>
        <div style={{ maxWidth: 650 }} className="mx-auto">
          <SubHeading className="text-primary">
            Our connected intelligence framework is designed to transform inside sales by translating customer insights into measurable results.
          </SubHeading>
          <p>
            We start with your existing data to analyze customers’ behaviors and plan new sales strategies.
            Our full suite of services enables us to execute and optimize growth as an extension of your inside sales team, continuously improving results.
          </p>
        </div>
      </Container>
      <Container fluid className="bg-secondary text-center p-5">
        <img className="d-none d-sm-block mt-5 mb-5 mx-auto img-fluid" src="/static/img/diagrams/circle.svg" alt="Capabilities" />
        <img className="d-sm-none mt-5 mb-5 mx-auto img-fluid" src="/static/img/diagrams/circle-mobile.svg" alt="Capabilities" />
      </Container>
      <Container className="text-center mt-5 mb-5">
        <div style={{ maxWidth: 650 }} className="mx-auto">
          <Eyebrow className="font-weight-bold text-primary">Channel 80/20</Eyebrow>
          <Title className="text-primary">MMC&apos; core technologies explained</Title>
          <SubHeading className="text-primary">
            Our 80/20 Channel is the foundation for our model.  It&apos;s how we create growth from overlooked customer segments.
          </SubHeading>
          <p className="mt-5 pb-5">
            Using several core technologies, MMC challenges the traditional 80/20 paradigm.
            We identify opportunities to engage the bottom 80% of our clients’ customers,
            transforming them from declining revenue sources to new drivers of growth.
            No investment in technology or platforms, and no hiring or training required.
            Let us create a custom demo for your organization and show you what Channel 80/20 can do for your business.
          </p>
          <Button color="secondary" className="text-uppercase" outline>Request a demo</Button>
        </div>
      </Container>
      <Container fluid className="bg-info pt-5 pb-5">
        <Container className="text-center bg-white p-5">
          <SubHeading className="text-primary h5 pb-5">
            Learn more about each step of the process
          </SubHeading>
          <ListGroup className="mx-auto" style={{ maxWidth: 650 }}>
            <CollapseList title="01. DATA">
              <p>
                MMC utilizes existing client data, company-owned data and third-party data,
                to create and continuously update a &quot;golden record,&quot; master database for each customer.
              </p>

              <ul>
                <li>
                  <strong>Cleanup / Parsing</strong>
                  <ul>
                    <li>Extract</li>
                    <li>Manual Scrubbing</li>
                  </ul>
                </li>
                <li>
                  <strong>Hygiene</strong>
                  <ul>
                    <li>Field Mapping</li>
                    <li>Analyzing trends in data</li>
                    <li>Processes</li>
                  </ul>
                </li>
                <li>
                  <strong>Matching</strong>
                  <ul>
                    <li>Transform</li>
                  </ul>
                </li>
                <li>
                  <strong>Loading</strong>
                  <ul>
                    <li>Outputs</li>
                  </ul>
                </li>
                <li><strong>Campaign Setup</strong></li>
              </ul>
            </CollapseList>
            <CollapseList title="02. ANALYTICS">
              <p>
                Our team of data scientists and experts extract and categorize data to reveal patterns across transactions,
                customer behaviors and demographics to help clients sell smarter and get ahead.
              </p>
              <ul>
                <li>
                  <strong>Prescriptive</strong>
                  <ul>
                    <li>Optimization</li>
                    <li>Simulation</li>
                    <li>Targeting</li>
                  </ul>
                </li>
                <li>
                  <strong>Descriptive</strong>
                  <ul>
                    <li>Reporting</li>
                    <li>Business Intelligence</li>
                    <li>Segmentation</li>
                  </ul>
                </li>
                <li>
                  <strong>Predictive</strong>
                  <ul>
                    <li>Forecasting</li>
                    <li>Modeling</li>
                    <li>Classification</li>
                  </ul>
                </li>
                <li>
                  <strong>Loading</strong>
                  <ul>
                    <li>Outputs</li>
                  </ul>
                </li>
                <li><strong>Campaign Setup</strong></li>
              </ul>
            </CollapseList>
            <CollapseList title="03. STRATEGY">
              <p>
                MMC strategists and account teams work with each client to personalize a strategy that will optimize their growth.
                We focus, train, and execute our TERO Methodology.
              </p>
              <ul>
                <li>
                  <strong>Targeting</strong>
                  <ul>
                    <li>Lead scoring</li>
                    <li>
                      Segmentation
                      <ul>
                        <li>Profiling</li>
                        <li>Buyer persona</li>
                        <li>Value</li>
                        <li>Opportunity</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Engagement</strong>
                  <ul>
                    <li>Channels</li>
                    <li>Content</li>
                    <li>Messaging</li>
                  </ul>
                </li>
                <li>
                  <strong>Responsiveness</strong>
                  <ul>
                    <li>Unplanned programming</li>
                    <li>Triggered based reactions</li>
                  </ul>
                </li>
                <li>
                  <strong>Optimization</strong>
                  <ul>
                    <li>Reallocating resources to better plan for the future</li>
                    <li>Leveraging what we&apos;ve learned for greater outcomes</li>
                  </ul>
                </li>
              </ul>
            </CollapseList>
            <CollapseList title="04. CREATIVE">
              <p>
                Our creative team acts as a brand ambassador for each client,
                leveraging inhouse, client-side, and third-party
                designers, artists, copywriters, sales teams, and marketers to
                oversee and execute the creative process for all campaigns and channels.
              </p>
              <ul>
                <li>Copywriters</li>
                <li>Designers</li>
                <li>Creative Directors</li>
                <li>Art Directors</li>
                <li>Project managers</li>
                <li>Compliance</li>
                <li>Photography</li>
                <li>Videography</li>
              </ul>
            </CollapseList>
            <CollapseList title="05. VIRTUAL SALES">
              <p>
                MMC builds, hires, and trains teams to become an extension of the client&apos;s sales channel,
                utilizing the same brand, training, and integrated systems
                focusing on the brand experience and positive outcomes.
              </p>
              <ul>
                <li>National account coverage</li>
                <li>Vacant territory</li>
                <li>Account Based Management</li>
                <li>In servicing</li>
                <li>Channel education</li>
                <li>Channel promotion</li>
                <li>Cross sell/upsell</li>
                <li>Retention</li>
                <li>Sales Assist within client sales teams</li>
                <li>Product Selling</li>
              </ul>
            </CollapseList>
            <CollapseList title="06. EXECUTION">
              <p>
                We bridge online and offline channels to deliver consistent and meaningful customer
                interactions through digital multi-channel execution.
              </p>
              <ul>
                <li>Websites</li>
                <li>Email</li>
                <li>Mobile</li>
                <li>
                  Digital ads
                  <ul>
                    <li>Native</li>
                    <li>Pre-roll</li>
                    <li>Targeted</li>
                  </ul>
                </li>
                <li>Targeted Ad Displays</li>
                <li>Text</li>
                <li>Social</li>
                <li>Brand Listening</li>
              </ul>
            </CollapseList>
            <CollapseList title="07. SUPPORT">
              <p>
                Customer service before, during, and after a purchase to ensure our client&apos;s brand experience is
                consistent throughout the client life cycle.
              </p>
              <ul>
                <li>Lead Management</li>
                <li>Product Training</li>
                <li>Inservice</li>
                <li>Customer issue/resolution</li>
                <li>Quoting</li>
                <li>Channel education</li>
              </ul>
            </CollapseList>
            <CollapseList title="08. OPTIMIZATION">
              <p>
                We look from all aspects to improve the marketing efforts of an organization, in an effort to
                maximize desired business outcomes.
              </p>
              <ul>
                <li>Predicting sales pipeline valuer</li>
                <li>optimal resource sales planning</li>
                <li>marketing revenue attribution</li>
                <li>ideal marketing program mixes</li>
                <li>sales performance reporting</li>
                <li>complete life cycle</li>
                <li>robust reporting</li>
              </ul>
            </CollapseList>
          </ListGroup>
        </Container>
      </Container>
      <Container className="text-center pt-5 pb-5 mb-5 mt-5">
        <Title className="text-primary pb-4">Our Team is Your Team</Title>
        <TeamPanel size={12} />
      </Container>
      <CallToAction />
      <Footer />
    </React.Fragment>
  );
}

export default Capabilities;
