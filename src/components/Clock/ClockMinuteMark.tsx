import { FC, memo } from 'react';
import { ClockMark, ClockMarkProps } from './ClockMark';

interface ClockMinuteMarkProps {
  value: number;
  size: number;
}

const MINUTE_RATIO: ClockMarkProps['ratio'] = {
  ANGLE_RATIO: 6,
  HEIGHT_RATIO: 50,
  WIDTH_RATIO: 133,
};

export const ClockMinuteMark: FC<ClockMinuteMarkProps> = memo(
  ({ value, size }) => (
    <ClockMark ratio={MINUTE_RATIO} size={size} value={value} />
  )
);
