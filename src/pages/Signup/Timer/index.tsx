import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { TimerAtom } from '../../../atoms';

const Timer = () => {
  const [timerSec, setTimerSec] = useRecoilState(TimerAtom);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerSec((prevSeconds: number) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return <div>{formatTime(timerSec)}</div>;
};

export default Timer;
