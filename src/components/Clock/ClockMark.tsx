import { Context, createContext, FC, memo, PropsWithChildren } from 'react';
import './ClockMark.scss';

export interface ClockMarkProps extends PropsWithChildren {
  ratio: {
    ANGLE_RATIO: number;
    WIDTH_RATIO: number;
    HEIGHT_RATIO: number;
  };
  value: number;
  size: number;
}

export const ClockMarkContext: Context<{
  angle: number;
  value: number;
}> = createContext({
  angle: 0,
  value: 0,
});

export const ClockMark: FC<ClockMarkProps> = memo(
  ({ ratio, value, size, children }) => {
    const angle = value * ratio.ANGLE_RATIO;
    const width = size / ratio.WIDTH_RATIO;
    const center = width / 2;
    const markHeight = size / ratio.HEIGHT_RATIO;

    return (
      <div
        className="clock-mark"
        style={{
          transform: `rotate(${angle}deg)`,
          width: `${width}px`,
          left: `calc(50% - ${center}px)`,
          borderTopWidth: `${markHeight}px`,
        }}
      >
        <ClockMarkContext.Provider value={{ angle, value }}>
          {children}
        </ClockMarkContext.Provider>
      </div>
    );
  }
);
