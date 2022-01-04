import state from './state';
import timer from './timer';
import button from './button';

const services = {
  state,
  timer,
  button,
};

export type Services = typeof services;

export default services;
