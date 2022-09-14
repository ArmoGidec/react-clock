import { FC } from 'react';
import { ClockBase } from '../ClockBase';
import { ClockHourArrow, ClockMinuteArrow, ClockSecondArrow } from '../ClockArrow';

import './Clock.scss';

export interface ClockProps {
  time: Date;
  size: number | string;
}

export const Clock: FC<ClockProps> = ({ time, size }) => {
  const sizeNum = isNaN(+size) ? 100 : +size;
  return (
    <div
      className="clock"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <ClockBase size={sizeNum} />
      <ClockSecondArrow size={sizeNum} time={time} />
      <ClockMinuteArrow size={sizeNum} time={time} />
      <ClockHourArrow size={sizeNum} time={time} />
    </div>
  );
};
