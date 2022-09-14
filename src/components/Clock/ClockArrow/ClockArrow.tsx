import { FC } from 'react';
import { Property } from 'csstype';
import './ClockArrow.scss';

export interface ClockArrowProps {
  height: number;
  angle: number;
  color?: Property.Color;
}

export const ClockArrow: FC<ClockArrowProps> = ({ height, color = 'black', angle }) => (
  <div
    className="clock-arrow"
    style={{
      height,
      color,
      transform: `rotate(${angle}deg)`
    }}
  ></div>
);
