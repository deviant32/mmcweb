import React from 'react';

const Title = (props) => {
  const { children, className } = props;
  return (
    <h1 className={`h2 pt-0 mb-4 font-weight-normal ${className}`}>
      {children}
    </h1>
  )
}

export default Title;
