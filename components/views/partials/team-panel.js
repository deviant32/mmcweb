import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Square from '../../widgets/square';


const TeamPanel = (props) => {

  const { size } = props;

  let headshotArr = [
    { src: '/static/img/people/Headshots-Square-1.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-2.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-3.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-4.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-5.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-6.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-7.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-8.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-9.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-10.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-11.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-12.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-13.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-14.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-15.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-16.jpg', displayed: false },
    { src: '/static/img/people/Headshots-Square-17.jpg', displayed: false }
  ];


  const [visibleImages, setVisibleImages] = useState([]);


  const getUndisplayedImage = () => {
    return headshotArr.filter((img) => { img.displayed === false });
  }



  return (
    <Container>
      <Row className="text-center mt-5 pt-5">
        <Col>
          <h2 className="pt-2 mb-5 text-primary font-weight-bold">
            Our Team is Your Team
          </h2>
        </Col>
      </Row>
      <Row className="no-gutters">
        {Array(size).fill(
          <Col xs="3" className="p-0" style={{ width: 200 }}>
            <Square
              {...props}
              items={
                headshotArr
              }
            />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default TeamPanel;
