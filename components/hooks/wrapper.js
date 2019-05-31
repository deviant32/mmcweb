import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import UserContext from './context';

const Wrapper = (props) => {

  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const { children } = props;
  var keycode = null;

  useEffect(() => {
    keycode = sessionStorage.getItem('keycode');
    setLoading(true);

    if (keycode !== '') {
      axios.get('http://localhost:8080/auth?keycode=' + keycode, { useCache: true })
        .then((res) => {
          setUser(res.data);
          sessionStorage.setItem('keycode', keycode);
        })
        .finally(() => {
          setLoading(false);
        })
    } else {
      setLoading(false);
    }
  }, [keycode]);

  return (
    loading ?
      (
        <div style={{ width: '100vw', paddingTop: '10%' }} className="d-flex justify-content-center">
          <Spinner style={{ width: '3rem', height: '3rem' }} color="primary" />
        </div>

      )
      :
      (
        <div>
          {children}
        </div>
      )

  )

}

export default Wrapper;
