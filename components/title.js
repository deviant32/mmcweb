import React from 'react';

const Title = (props) => {
  const { children, className, style } = props;
  return (
    <h1 className={`h2 pt-0 mb-4 font-weight-normal ${className}`} style={{ ...style }}>
      {children}
    </h1>
  )
}

export default Title;
