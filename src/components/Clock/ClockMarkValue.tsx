import { useContext } from 'react';
import { ClockMarkContext } from './ClockMark';

export const ClockMarkValue = () => {
  const markValue = useContext(ClockMarkContext);
  return (
    <span
      className="clock-mark__value"
      style={{
        transform: `rotate(-${markValue.angle}deg)`,
      }}
    >
      {markValue.value}
    </span>
  );
};
