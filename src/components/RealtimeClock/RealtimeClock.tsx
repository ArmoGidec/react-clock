import { FC, useEffect, useState } from 'react';
import { Clock, ClockProps } from '@components/Clock/Clock/Clock';
import { Loading } from '@components/Loading';
import { TimeService } from './TimeService';
import { isUndefined } from '@shared/common';

interface RealtimeClockProps extends Pick<ClockProps, 'size'> {
  timeService: TimeService;
}

export const RealtimeClock: FC<RealtimeClockProps> = ({
  size,
  timeService,
}) => {
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date>();

  useEffect(() => {
    let timer: number;
    const startTimer = () => {
      timer = (setInterval as typeof window.setInterval)(() => {
        setCurrentTime(new Date());
      });
    };

    const getCurrentTime = async () => {
      setLoading(true);

      try {
        setCurrentTime(await timeService.getCurrentTime());
        startTimer();
      } finally {
        setLoading(false);
      }
    };

    getCurrentTime();
    return () => {
      if (!isUndefined(timer)) {
        clearInterval(timer);
      }
    };
  }, []);

  return loading || isUndefined(currentTime) ? (
    <Loading />
  ) : (
    <Clock size={size} time={currentTime} />
  );
};
