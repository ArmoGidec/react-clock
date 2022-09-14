import { FC, memo } from 'react';
import { ClockHourMark } from '../ClockMark/ClockHourMark';
import { ClockMinuteMark } from '../ClockMark/ClockMinuteMark';

import './ClockBase.scss';

interface ClockBaseProps {
  size: number;
}

const isHourMark = (markValue: number) => markValue % 5 === 0;
const minuteValueToHour = (minute: number) => minute / 5;

export const ClockBase: FC<ClockBaseProps> = memo(({ size }) => (
  <div className="clock-base">
    {Array.from({ length: 60 }).map((_, idx) => {
      const minute = idx + 1;
      return isHourMark(minute) ? (
        <ClockHourMark key={idx} value={minuteValueToHour(minute)} size={size} />
      ) : (
        <ClockMinuteMark key={idx} value={minute} size={size} />
      );
    })}
  </div>
));
