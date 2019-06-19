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


const CoreTechnology = () => {

  return (
    <React.Fragment>
      <Head>
        <title>Core Technology</title>
      </Head>
      <Header className="mb-5" />
      <Container className="text-center bg-info p-5" style={{ marginTop: '10rem' }}>
        <Eyebrow className="font-weight-bold">
          MMC&apos;s Process
        </Eyebrow>
        <Title className="text-primary">
          MMC&apos;s Core Technologies
          <br />
          Explained
        </Title>
        <div style={{ maxWidth: 650 }} className="mx-auto">
          <SubHeading className="text-primary">
            At the heart of MMC&apos;s model are several core technologies that pave the path to transformational growth.
          </SubHeading>
          <p>
            The best part is we do it with &nbsp;
            <strong>your existing data.</strong>
          </p>

          <Button className="text-uppercase mt-5" color="secondary" outline>Request a demo</Button>
        </div>
      </Container>
      <Container className="text-center mt-5">
        <div style={{ maxWidth: 650 }} className="mx-auto">
          <Eyebrow className="font-weight-bold">CONNECTED INTELLIGENCE</Eyebrow>
          <Title className="text-primary">How MMC Drives Growth</Title>
          <SubHeading className="text-primary">
            Our connected intelligence framework is how we structure our work on your behalf.
            It&apos;s the &quot;What&quot; that connects with the &quot;How&quot; of your next action
            platform (shown below).
          </SubHeading>
          <p className="mt-5 pb-5">
            Starting with Data, we move through the cycle step-by-step, analyzing, planning, executing, and optimizing.  This happens not once, but
            continuously for the life of our engagement, getting smarter moment by moment and optimizing results for better and better performance
          </p>
        </div>
      </Container>
      <Container fluid className="bg-secondary text-center p-5">
        <img className="mt-5 mb-5 img-fluid" src="https://placeimg.com/800/600/tech" alt="graphic" />
      </Container>
      <Container fluid className="bg-info">
        <Container className="position-relative text-center bg-white p-5" style={{ top: '-50px' }}>
          <SubHeading className="text-primary">
            Learn more about each step
          </SubHeading>
          <ListGroup className="mx-auto" style={{ maxWidth: 650 }}>
            <CollapseList title="01. DATA">
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor indidunt ut labore et dolore magna aliqua.</li>
                <li>Quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis autre irure in reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</li>
              </ul>
            </CollapseList>
            <CollapseList title="02. ANALYTICS">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="03. STRATEGY">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="04. CREATIVE">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="05. VIRTUAL SALES">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="06. EXECUTION">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="07. SUPPORT">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="08. OPTIMIZATION">
              <p>Test</p>
            </CollapseList>
          </ListGroup>
        </Container>
      </Container>
      <Container className="text-center mt-5 pb-5">
        <div style={{ maxWidth: 650 }} className="mx-auto">
          <Eyebrow className="font-weight-bold">NEXT ACTION PLATFORM</Eyebrow>
          <Title className="text-primary">
            Structuring Data to
            <br />
            Drive Action
          </Title>
          <SubHeading className="text-primary">
            The next action platform is the &quot;engine&quot; that drives the connected intelligence process.
          </SubHeading>
          <p className="mt-4 text-left">
            The Next Action Platform takes your client & prospect data, scrubs it for errors, duplicates,
            and useless information, and returns a usable data set. For most of our clients the result is
            generally +/- 15% of the original set, due to attrition and misinformation.
          </p>
          <p className="mt-4 text-left">
            We then use that data to develop omnichannel strategies, and apply an interconnected suite of lead
            and oppurtunity management tools to coordinate campaign staging and delivery across multiple connected channels.
          </p>
          <p className="mt-4 text-left">
            The Digital Engagement Center controls timed follow-up for all materials, and the Reporting & Insights engine determines
            resultsand informs optimization, continually updating and improving with subsequent learning.
          </p>
        </div>
      </Container>
      <Container fluid className="bg-secondary text-center p-5">
        <img className="mt-5 mb-5 img-fluid" src="https://placeimg.com/900/450/tech" alt="graphic" />
      </Container>
      <Container fluid className="bg-info">
        <Container className="position-relative text-center bg-white p-5" style={{ top: '-50px' }}>
          <SubHeading className="text-primary">
            Learn more about each step
          </SubHeading>
          <ListGroup className="mx-auto" style={{ maxWidth: 650 }}>
            <CollapseList title="01. DATA">
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor indidunt ut labore et dolore magna aliqua.</li>
                <li>Quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis autre irure in reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</li>
              </ul>
            </CollapseList>
            <CollapseList title="02. CLEAN">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="03. PLAN">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="04. EXECUTE">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="05. MEASURE">
              <p>Test</p>
            </CollapseList>
            <CollapseList title="06. OPTIMIZE">
              <p>Test</p>
            </CollapseList>
          </ListGroup>
        </Container>
      </Container>
      <CallToAction />
      <Footer />
    </React.Fragment>
  );
}

export default CoreTechnology;
