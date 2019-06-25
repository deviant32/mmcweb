import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import Square from '../../widgets/square';


const TeamPanel = (props) => {

  const { size } = props;

  // array that contains all of the headshots
  let headshotArr = [
    { type: 'image', src: '/static/img/people/Headshots-Square-1.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-2.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-3.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-4.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-5.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-6.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-7.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-8.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-9.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-10.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-11.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-12.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-13.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-14.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-15.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-16.jpg' },
    { type: 'image', src: '/static/img/people/Headshots-Square-17.jpg' },
  ];

  // array that contains all of the stats
  let statArr = [
    { type: 'stat', title: '20', description: 'Digital Designer and Creatives' },
    { type: 'stat', title: '30', description: 'Account Managers and Strategist' },
    { type: 'stat', title: '300', description: 'Bold, Bright & Open MMC Employees' }
  ]

  var statIndex = 0;

  // function needs to return an array to populate the inital state
  const shuffleArray = () => {
    // create a N sized array with all images
    let headshots = headshotArr.sort(() => 0.5 - Math.random()).slice(0, size);

    // get number of stats based on 30 percent of total rows
    let numOfStats = Math.floor(size * .30);

    // get a random number of stats based on number of stats
    let stats = statArr.sort(() => 0.5 - Math.random()).slice(0, numOfStats);

    // TODO: make this dynamically shift, for now hard coded
    if (statIndex === 0) {
      headshots[2] = stats[0];
      headshots[5] = stats[1];
      headshots[10] = stats[2];
      statIndex = 1;
    } else {
      headshots[1] = stats[0];
      headshots[6] = stats[1];
      headshots[9] = stats[2];
      statIndex = 0;
    }

    return headshots;
  }

  // preload a shuffled array for initial state
  const [shuffledArr, setShuffledArray] = useState(shuffleArray());


  // create a timer and cleanup after every execution, wasteful but it works for now
  // TODO make this more effecient
  useEffect(() => {
    var timerID = setInterval(() => update(), 8000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const update = () => {
    // update the shuffled array
    setShuffledArray(shuffleArray());
  }

  return (
    <Row className="no-gutters">
      {shuffledArr.map((item, index) => {
        return (
          <Col xs="6" sm="6" md="3" style={{ width: 200 }}>
            <Square
              {...props}
              item={item}
              index={index}
            />
          </Col>
        )
      })}
    </Row>
  );
};

export default TeamPanel;
