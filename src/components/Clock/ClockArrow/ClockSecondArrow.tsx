import { FC } from 'react';
import { ClockArrow } from './ClockArrow';
import { getSeconds } from '@shared/time';

interface ClockSecondArrowProps {
  time: Date;
  size: number;
}

const SECOND_ANGLE_BY_MINUTE = 6; // 360/60

export const ClockSecondArrow: FC<ClockSecondArrowProps> = ({ time, size }) => {
  const angle = SECOND_ANGLE_BY_MINUTE * getSeconds(time);
  return <ClockArrow height={size * 0.95 / 2} color="red" angle={angle} />;
};
