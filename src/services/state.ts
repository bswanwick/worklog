import { BehaviorSubject } from 'rxjs';

export type ApplicationState = {
  reactRendered: boolean;
  numberOfTimesButtonPressed: number;
};

const defaultApplicationState: ApplicationState = {
  reactRendered: false,
  numberOfTimesButtonPressed: 0,
};

// setup our application state as a service
const state$ = new BehaviorSubject<ApplicationState>(defaultApplicationState);

state$.subscribe((state) => console.log('[worklog.services.state] DEBUG_MODE detected an update in state$.', state));

// Example of how to read from state using .pipe() instead
// don't forget to.subscribe() to the Observable returned by .pipe()!!!
// state$.pipe(
//   tap((state)=>console.log('[worklog.services.state] state$ detected an update in pipe.', state))
// ).subscribe();

function setState(updatePayload: Partial<ApplicationState>) {
  console.log('[worklog.services.state] setState received an updatePayload!', updatePayload);
  state$.next({ ...state$.getValue(), ...updatePayload }); // TODO object.assign instead?
}

// setup our state object for use in the application.
// One Observable to subscribe to state updates.
// And one function to write updates.
const state = {
  state$,
  setState,
};

export default state;
