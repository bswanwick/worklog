import state from './state';

const buttonPressedCounter = () => {
  const numberOfTimesButtonPressed = state.state$.getValue().numberOfTimesButtonPressed + 1;
  state.updateState({ numberOfTimesButtonPressed });
};

const button = {
  buttonPressedCounter,
};

export default button;
