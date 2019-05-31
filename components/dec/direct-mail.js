import React from 'react';
import UserContext from '../context';


const DirectMail = (props) => {

  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div {...props}>
          {props.package_codes.includes(user.package_code) && (
            props.children
          )}
        </div>
      )}
    </UserContext.Consumer>
  )
}
export default DirectMail;
