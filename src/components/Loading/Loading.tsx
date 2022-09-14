import { FC, memo } from 'react';
import { type Property } from 'csstype';
import './Loading.scss';

interface LoadingProps {
  color?: Property.Color;
}

export const Loading: FC<LoadingProps> = memo(({ color = 'black' }) => (
  <div
    className="lds-ring"
    style={{
      color: color,
    }}
  >
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
));
