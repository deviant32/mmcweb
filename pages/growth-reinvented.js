import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';


const GrowthReinventedPage = () => {

  const params = {
    direction: 'vertical',
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };

  return (
    <Meta>
      <Head>
        <title>MMC Web</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css" />
      </Head>
      <Header />
      <Container className="bg-full" style={{ height: 300 }} fluid />
      <Container className="mb-5 position-relative" style={{ height: 500, top: -50 }}>
        <Row>
          <Col xs="12">
            <Swiper {...params}>
              <div
                className="bg-primary text-center text-white d-table pb-5 pt-5"
                style={{
                  height: 200,
                  backgroundImage: 'url(/static/img/shapes/arrow-down.svg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                <div className="d-table-cell align-middle" style={{ paddingBottom: '5%', paddingTop: '5%' }}>
                  <h5 className="sub-heading text-uppercase pt-3">The sales process is ready for</h5>
                  <h1 className="pt-0 font-weight-bold" style={{ fontSize: '5.2rem' }}>Reinvention</h1>
                </div>
              </div>
              <div>Slide 2</div>
              <div>Slide 3</div>
              <div>Slide 4</div>
              <div>Slide 5</div>
            </Swiper>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Meta>
  );
}

export default GrowthReinventedPage;
