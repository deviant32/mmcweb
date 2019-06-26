import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Square } from '.';


const TeamPanel = (props) => {

  const { size } = props;

  // array that contains all of the headshots
  var headshotArr = [
    { id: 'i1', type: 'image', src: '/static/img/people/Headshots-Square-1.jpg' },
    { id: 'i2', type: 'image', src: '/static/img/people/Headshots-Square-2.jpg' },
    { id: 'i3', type: 'image', src: '/static/img/people/Headshots-Square-3.jpg' },
    { id: 'i4', type: 'image', src: '/static/img/people/Headshots-Square-4.jpg' },
    { id: 'i5', type: 'image', src: '/static/img/people/Headshots-Square-5.jpg' },
    { id: 'i6', type: 'image', src: '/static/img/people/Headshots-Square-6.jpg' },
    { id: 'i7', type: 'image', src: '/static/img/people/Headshots-Square-7.jpg' },
    { id: 'i8', type: 'image', src: '/static/img/people/Headshots-Square-8.jpg' },
    { id: 'i9', type: 'image', src: '/static/img/people/Headshots-Square-9.jpg' },
    { id: 'i10', type: 'image', src: '/static/img/people/Headshots-Square-10.jpg' },
    { id: 'i11', type: 'image', src: '/static/img/people/Headshots-Square-11.jpg' },
    { id: 'i12', type: 'image', src: '/static/img/people/Headshots-Square-12.jpg' },
    { id: 'i13', type: 'image', src: '/static/img/people/Headshots-Square-13.jpg' },
    { id: 'i14', type: 'image', src: '/static/img/people/Headshots-Square-14.jpg' },
    { id: 'i15', type: 'image', src: '/static/img/people/Headshots-Square-15.jpg' },
    { id: 'i16', type: 'image', src: '/static/img/people/Headshots-Square-16.jpg' },
    { id: 'i17', type: 'image', src: '/static/img/people/Headshots-Square-17.jpg' },
  ];

  // array that contains all of the stats
  var statArr = [
    { id: 's1', type: 'stat', title: '20', description: 'Digital Designer and Creatives' },
    { id: 's2', type: 'stat', title: '20', description: 'Account Managers' },
    { id: 's3', type: 'stat', title: '300', description: 'Bold, Bright & Open MMC Employees' },
    { id: 's4', type: 'stat', title: '162', description: 'Inside Sales Professionals' },
    { id: 's5', type: 'stat', title: '15', description: 'Creative Designers' },
    { id: 's6', type: 'stat', title: '10', description: 'Business Analysts' },
    { id: 's7', type: 'stat', title: '4', description: 'Project Managers' },
    { id: 's8', type: 'stat', title: '11', description: 'Data Experts' },
  ]

  // function needs to return an array to populate the inital state
  const shuffleArray = () => {
    // create a N sized array with all images
    let headshots = headshotArr.sort(() => 0.5 - Math.random()).slice(0, size);

    // get number of stats based on 30 percent of total rows
    let numOfStats = Math.floor(size * .30);

    // get a random number of stats based on number of stats
    let stats = statArr.sort(() => 0.5 - Math.random()).slice(0, numOfStats);

    // TODO: make this dynamically shift, for now hard coded
    if (Math.random() >= 0.5) { // random boolean
      headshots[2] = stats[0];
      headshots[5] = stats[1];
      headshots[10] = stats[2];
    } else {
      headshots[1] = stats[0];
      headshots[6] = stats[1];
      headshots[9] = stats[2];
    }

    return headshots;
  }

  // preload a shuffled array for initial state
  // eslint-disable-next-line no-unused-vars
  const [shuffledArr, setShuffledArray] = useState(shuffleArray());


  // create a timer and cleanup after every execution, wasteful but it works for now
  // TODO make this more effecient
  useEffect(() => {
    /* var timerID = setInterval(() => update(), 8000);
    return function cleanup() {
      clearInterval(timerID);
    }; */
  });

  //const update = () => {
  // update the shuffled array
  //setShuffledArray(shuffleArray());
  //}

  return (
    <Row className="no-gutters">
      {shuffledArr.map((item) => {
        return (
          <Col xs="6" sm="6" md="4" lg="3">
            <Square
              {...props}
              item={item}
              index={item.id}
            />
          </Col>
        )
      })}
    </Row>
  );
};

export default TeamPanel;
