import React from 'react';

const SubHeading = (props) => {
  const { children, className } = props;
  return (
    <p className={`sub-heading text-uppercase mx-auto pt-3 mb-4 font-weight-bold ${className}`}>{children}</p>
  )
}

export default SubHeading;
