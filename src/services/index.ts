import state from './state';
import timer from './timer';
import button from './button';

if (process.env.DEBUG_MODE) console.log('[worklog.services.index] DEBUG_MODE=true');

const services = {
  state,
  timer,
  button,
};

export type Services = typeof services;

export default services;
