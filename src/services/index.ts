import state from './state';
import timer from './timer';

const services = {
  state,
  timer
};

export type Services = typeof services;

export default services;