import React from 'react';

const SubHeading = (props) => {
  const { children, className, style } = props;
  return (
    <p
      className={`sub-heading text-uppercase mx-auto mb-4 font-weight-bold ${className}`}
      style={{ ...style }}
    >
      {children}
    </p>
  )
}

export default SubHeading;
