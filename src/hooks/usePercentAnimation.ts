import React, { useEffect, useRef, useState } from 'react';

const usePercentAnimation = (start: number, end: number) => {
  const [num, setNum] = useState(0);
  const ref = useRef(start);

  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setNum(end);
      setNum(result);
      ref.current = result;
    } else if (ref.current > end) {
      const result = Math.ceil(ref.current - accumulator);
      if (result < end) return setNum(end);
      setNum(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, 50);
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    isMounted = false;
  }, [end, start]);

  return num;
};

export default usePercentAnimation;
