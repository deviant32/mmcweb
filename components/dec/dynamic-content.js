import React, { useContext } from 'react';
import { UserContext } from '..';


const DynamicContent = (props) => {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);
  const { package_codes, children } = props;

  return (
    <div>
      {package_codes.some(r => user.PackageCode.split(',').indexOf(r) >= 0) && (
        children
      )}
    </div>
  )
}
export default DynamicContent;
