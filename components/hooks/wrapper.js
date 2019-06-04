import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import UserContext from './context';

const Wrapper = (props) => {

  const [user, setUser] = useContext(UserContext);

  const { children } = props;
  var keycode = null;

  useEffect(() => {
    keycode = sessionStorage.getItem('keycode');

    if (keycode !== '') {
      axios.get('http://localhost:8080/auth?keycode=' + keycode, { useCache: true })
        .then((res) => {
          setUser(res.data);
          sessionStorage.setItem('keycode', keycode);
        })
    }
  }, [keycode]);

  return (
    <div>
      {children}
    </div>
  )

}

export default Wrapper;
