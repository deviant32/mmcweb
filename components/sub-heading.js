import React from 'react';

const SubHeading = (props) => {
  const { children, className, style } = props;
  return (
    <p
      className={`sub-heading text-uppercase mx-auto font-weight-bold mb-4 ${className}`}
      style={{ ...style }}
    >
      {children}
    </p>
  )
}

export default SubHeading;
