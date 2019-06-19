import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import UserContext from './context';

const Wrapper = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const { children } = props;
  var keycode = null;

  useEffect(() => {
    console.log('loading wrapper');
    keycode = sessionStorage.getItem('keycode');

    if (keycode !== null) {
      axios.get('http://localhost:8080/auth?keycode=' + keycode, { useCache: true })
        .then((res) => {
          setUser(res.data);
          window.dataLayer.push({ userId: res.data.ContactId });
          sessionStorage.setItem('keycode', keycode);
        }).finally(() => {
          setLoading(false);
        })
    }
  }, [keycode]);

  return (
    loading ? null
      : (
        <div>
          {children}
        </div>
      )
  )

}

export default Wrapper;
