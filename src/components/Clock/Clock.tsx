import { FC } from "react";
import { ClockBase } from "./ClockBase";

interface ClockProp {
  time: Date
}

export const Clock: FC<ClockProp> = ({ time }) => {
  return <div className="clock">
    <ClockBase size={200} />
  </div>
};
