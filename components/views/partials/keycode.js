import React, { useState, useContext } from 'react';
import {
  Container, Form, FormGroup, Input, Button, Row, Col
} from 'reactstrap';
import axios from 'axios';
import UserContext from '../../hooks/context';


function Keycode() {

  const [keycode, setKeycode] = useState('');
  const [user, setUser] = useContext(UserContext);

  const handleKeyPress = (target) => {
    if (target.charCode == 13) {
      target.preventDefault();
      submitKeycode();
    }
  }

  const submitKeycode = () => {
    axios.get('http://localhost:8080/auth?keycode=' + keycode)
      .then((res) => {
        setUser(res.data);
        sessionStorage.setItem('keycode', keycode);
      })
  }

  return (
    <Container fluid className="bg-white p-4 text-center">
      <Row>
        <Col>
          <Form className="justify-content-center" inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                onChange={(e) => setKeycode(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your keycode"
              />
            </FormGroup>
            <Button onClick={() => submitKeycode()} color="success">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )

}

export default Keycode;
