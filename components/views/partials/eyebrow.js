import React from 'react';

const Eyebrow = (props) => {
  const { children, className } = props;
  return (
    <h2 className={`eyebrow text-uppercase font-weight-normal tre pt-3 ${className}`} style={{fontSize: '1.3em'}}>
      {children}
    </h2>
  )
}

export default Eyebrow;
