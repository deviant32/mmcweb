import React, { useState } from 'react';
import { UserContext } from '..';

const UserProvider = (props) => {
  const [user, setUser] = useState({ PackageCode: '' });
  const { children } = props;

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )

}

export default UserProvider;
