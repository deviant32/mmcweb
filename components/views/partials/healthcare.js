import { faHeartbeat, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Container, Row, Col, Button
} from 'reactstrap';


const Healthcare = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <div
            className="bg-success bg-squares mx-auto text-center p-0 text-white position-relative"
            style={{ maxWidth: '50vw', minHeight: 415, lineHeight: '415px', zIndex: 2 }}>
            <FontAwesomeIcon size="10x" style={{ verticalAlign: 'middle', dropShadow: '30px 10px 4px #4444dd' }} width="0" icon={faHeartbeat} />
          </div>
        </Col>
      </Row>
      <Row style={{ backgroundColor: '#DCDDDC', top: '-100px', zIndex: 1, paddingTop: 140 }} className="position-relative text-center pb-5">
        <Col>
          <span className="category">Category Tag</span>
          <h2 className="text-primary mt-3">Dolor Sit Ame Consectetur</h2>
          <p style={{ maxWidth: 650, lineHeight: '200%' }} className="mx-auto pt-3">
            Duis aute irure dolor in reprehenderit velit esse cillum dolore eu gugiat nulla
            pariatur.  Excepteur sint occaecat cupidatat non proid deserunt mollit anim id est laborum.
          </p>
          <Button outline color="secondary">
            VIEW CASE STUDY
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Healthcare;
