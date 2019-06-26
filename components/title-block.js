import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Eyebrow from './eyebrow';
import Title from './title';

const TitleBlock = (props) => {
  const { children, eyebrow, title } = props;
  return (
    <Container className="position-relative bg-primary text-white p-5" style={{ top: '-50px', zIndex: 2 }}>
      <Row>
        <Col xs="12" className="text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title>{title}</Title>
          <div className="mx-auto" style={{ maxWidth: 650 }}>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TitleBlock;
