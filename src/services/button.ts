import state from './state';

const buttonPressedCounter = () => {
  const numberOfTimesButtonPressed = state.state$.getValue().numberOfTimesButtonPressed + 1;
  state.setState({ numberOfTimesButtonPressed });
};

const button = {
  buttonPressedCounter,
};

export default button;
