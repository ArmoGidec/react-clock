import { FC, memo } from 'react';
import { ClockHourMark } from './ClockHourMark';
import './ClockBase.scss';
import { ClockMinuteMark } from './ClockMinuteMark';

interface ClockBaseProp {
  size: number;
}

export const ClockBase: FC<ClockBaseProp> = memo(({ size }) => {
  return (
    <div
      className="clock-base"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {Array.from({ length: 60 }).map((_, idx) => {
        const value = idx + 1;
        return value % 5 === 0 ? (
          <ClockHourMark key={idx} value={value / 5} size={size} />
        ) : (
          <ClockMinuteMark key={idx} value={value} size={size} />
        );
      })}
    </div>
  );
});
