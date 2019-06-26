import React from 'react';
import SubHeading from './sub-heading';

const Statistic = (props) => {
  const { children, className, value } = props;
  return (
    <div className="statistic">
      <h2 className={`eyebrow text-uppercase font-weight-bold ${className}`} style={{ fontSize: '10rem' }}>
        <img src="/static/img/abstract/pie.svg" alt="pie" className="pr-4 text-success" />
        {value}
        <span style={{ fontSize: '3.6rem', verticalAlign: '50%' }}>%</span>
      </h2>
      <SubHeading className="font-weight-normal">{children}</SubHeading>
    </div>
  )
}

export default Statistic;
