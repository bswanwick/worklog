import { BehaviorSubject } from 'rxjs';

type ApplicationState = {
  reactRendered: boolean;
};

const applicationState: ApplicationState = {
  reactRendered: false,
};

// state as a service
// TODO this is probably a bad idea and I should have just used Redux.
const state$ = new BehaviorSubject<ApplicationState>(applicationState);

state$.subscribe((state) => console.log('[worklog.services.state] state$ detected an update.', state));

// EXAMPLE using .pipe() instead
// don't forget to.subscribe() to the Observable returned by .pipe()!!!
// state$.pipe(
//   tap((state)=>console.log('[worklog.services.state] state$ detected an update in pipe.', state))
// ).subscribe();

// updateState receives a Partial<ApplicationState> and spreads it over the current state$.value
const updateState = (updatePayload: Partial<ApplicationState>) => {
  console.log('[worklog.services.state] updateState received an updatePayload!', updatePayload);
  state$.next({ ...state$.value, ...updatePayload });
};

const state = {
  state$,
  updateState,
};

export default state;
