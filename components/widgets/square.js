import React, { useState, useRef, useEffect } from 'react';



const Square = (props) => {

  const [slide, setSlide] = useState(props.items[0]);

  const getRandomId = () => {
    const min = 0;
    const max = props.items.length;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useInterval(() => {
    setSlide(props.items[getRandomId()]);
  }, 5000)



  return (
    <React.Fragment>
      <div className="slide" >
        <img src={`${slide.src}`} style={{ width: '100%', height: '100%' }} />
      </div>
    </React.Fragment>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}


export default Square;
