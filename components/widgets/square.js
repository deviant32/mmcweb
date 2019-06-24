import React, { useState, useRef, useEffect } from 'react';



const Square = (props) => {

  const { items } = props;

  const getRandomId = () => {
    const min = 0;
    const max = props.items.length;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const [slide, setSlide] = useState(items[getRandomId()]);


  useInterval(() => {
    setSlide(props.items[getRandomId()]);
  }, 5000)

  return (
    <img src={`${slide.src}`} alt="headshot" style={{ width: '100%', height: '100%' }} />
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
