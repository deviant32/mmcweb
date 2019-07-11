import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Square } from '.';


const TeamPanel = (props) => {

  // employees comes from sanity.io!
  const { size, employees } = props;

  // preload a shuffled array for initial state
  // eslint-disable-next-line no-unused-vars
  const [shuffledArr, setShuffledArray] = useState([]);

  // array that contains all of the stats
  var statArr = [
    { _id: 's1', type: 'stat', title: '20', description: 'Digital Designer and Creatives' },
    { _id: 's2', type: 'stat', title: '20', description: 'Account Managers' },
    { _id: 's3', type: 'stat', title: '300', description: 'Bold, Bright & Open MMC Employees' },
    { _id: 's4', type: 'stat', title: '162', description: 'Inside Sales Professionals' },
    { _id: 's5', type: 'stat', title: '15', description: 'Creative Designers' },
    { _id: 's6', type: 'stat', title: '10', description: 'Business Analysts' },
    { _id: 's7', type: 'stat', title: '4', description: 'Project Managers' },
    { _id: 's8', type: 'stat', title: '11', description: 'Data Experts' },
  ]

  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // function needs to return an array to populate the inital state
  const shuffleArray = () => {
    console.log('shuffleArray')
    // create a N sized array with all images
    let headshots = shuffle(employees).slice(0, size);

    // get number of stats based on 30 percent of total rows
    let numOfStats = Math.floor(size * .30);

    // get a random number of stats based on number of stats
    let stats = shuffle(statArr).slice(0, numOfStats);

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

    setShuffledArray(headshots);
  }

  useEffect(() => {
    shuffleArray();
  }, []);

  return (
    <Row className="no-gutters">
      {shuffledArr.map((item) => {
        return (
          <Col key={item._id} xs="6" sm="6" md="4" lg="3" className="bg-secondary">
            <Square
              item={item}
              index={item._id}
            />
          </Col>
        )
      })}
    </Row>
  );
};

export default TeamPanel;
