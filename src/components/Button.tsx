import { useObservable } from 'rxjs-hooks';
import services from '../services';

// This component displays a button with buttonPressedCounter from state.

const Button = () => {
  const {
    state: { state$ },
    button: { buttonPressedCounter },
  } = services;

  const state = useObservable(() => state$);

  return (
    <button
      onClick={buttonPressedCounter}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Button pressed {state?.numberOfTimesButtonPressed} times.
    </button>
  );
};

export default Button;
