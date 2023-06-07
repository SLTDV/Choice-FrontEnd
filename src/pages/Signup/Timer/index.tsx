import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { TimerAtom } from '../../../atoms';

const Timer = () => {
  const [timerSec, setTimerSec] = useRecoilState(TimerAtom);

  useEffect(() => {
    let timer: any;
    for (let i = timerSec; i >= 0; i--) {
      timer = setTimeout(() => {
        setTimerSec(i);
      }, (timerSec - i) * 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [timerSec]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return <p>{formatTime(timerSec)}</p>;
};

export default Timer;
