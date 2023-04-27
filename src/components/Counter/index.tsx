import React from 'react';
import usePercentAnimation from '../../hooks/usePercentAnimation';

const Counter = ({ start, end }: { start: number; end: number }) => {
  const percent = usePercentAnimation(start, end);
  return <h1>{percent}</h1>;
};

export default Counter;
