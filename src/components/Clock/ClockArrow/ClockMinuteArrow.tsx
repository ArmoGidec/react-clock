import {
  getMinutes,
  getSeconds,
} from '@shared/time';
import { FC } from 'react';
import { ClockArrow } from './ClockArrow';

interface ClockMinuteArrowProps {
  time: Date;
  size: number;
}

const MINUTE_ANGLE_BY_HOUR = 6; // 360/60
const MINUTE_ANGLE_BY_SECOND = 0.1 // 360/3600 

export const ClockMinuteArrow: FC<ClockMinuteArrowProps> = ({ time, size }) => {
  const angle = MINUTE_ANGLE_BY_HOUR * getMinutes(time) + MINUTE_ANGLE_BY_SECOND * getSeconds(time);
  return <ClockArrow height={size / 2 * 0.75} angle={angle} color="rgb(125, 125, 125)" />;
};
