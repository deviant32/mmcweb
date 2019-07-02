import React from 'react';

const Square = (props) => {
  const { item, index } = props;

  if (item.type === 'image') {
    return (
      <div>
        <img key={index} src={`${item.src}`} alt="headshot" style={{ width: '100%', height: '100%' }} />
      </div>
    )
  }

  if (item.type === 'stat') {
    return (
      <div key={index} className="h-100 text-center bg-secondary">
        <div className="my-auto" style={{ paddingTop: '10%' }}>
          <p className="text-warning eyebrow font-weight-bold m-0 p-0" style={{ fontSize: '6rem' }}>{item.title}</p>
          <p className="text-white mt-n4 pl-5 pr-5 text-uppercase font-weight-bold">{item.description}</p>
        </div>
      </div>
    )
  }

}

export default Square;
