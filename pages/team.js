import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import UserContext from '../components/hooks/context';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';


const Team = () => {

  const [user, setUser] = useContext(UserContext);

  return (
    <Meta>
      <Head>
        <title>Team</title>
      </Head>
      <Header />
      <Container style={{ minHeight: 400 }}>
        <Row>
          <Col xs="12">
            <p>Team</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Meta>
  );
}

export default Team;
