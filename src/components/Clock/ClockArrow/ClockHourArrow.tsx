import { getHours, getMinutes } from '@shared/time';
import { FC } from 'react';
import { ClockArrow } from './ClockArrow';

interface ClockHourArrowProps {
  time: Date;
  size: number;
}

const HOUR_ANGLE = 30; // 360/12
const HOUR_ANGLE_BY_MINUTE = 0.5; // (360/12)/60

export const ClockHourArrow: FC<ClockHourArrowProps> = ({ time, size }) => {
  const angle =
    HOUR_ANGLE * getHours(time) + HOUR_ANGLE_BY_MINUTE * getMinutes(time);
  return <ClockArrow height={size / 4} angle={angle} />;
};
