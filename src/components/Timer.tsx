import { useObservable } from 'rxjs-hooks';
import services from '../services';

// This component displays a timer.

const Timer = () => {
  const { timer } = services; // Pull in the timerService
  const timerValue = useObservable(() => timer(1000)); // useObservable also calls .subscribe

  return <h1 className="text-3xl font-bold underline">{timerValue}</h1>;
};

export default Timer;
