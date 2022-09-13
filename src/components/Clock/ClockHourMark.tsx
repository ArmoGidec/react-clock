import { FC, memo } from 'react';
import { ClockMark, ClockMarkProps } from './ClockMark';
import { ClockMarkValue } from './ClockMarkValue';

interface ClockHourMarkProps {
  value: number;
  size: number;
}

const HOUR_RATIO: ClockMarkProps['ratio'] = {
  ANGLE_RATIO: 30,
  WIDTH_RATIO: 40,
  HEIGHT_RATIO: 20,
};

export const ClockHourMark: FC<ClockHourMarkProps> = memo(({ value, size }) => (
  <ClockMark value={value} size={size} ratio={HOUR_RATIO}>
    <ClockMarkValue />
  </ClockMark>
));
