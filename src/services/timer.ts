import { interval, map, tap, filter, switchMap, delay } from "rxjs";
import state from "./state";

// timer is a service that emits an incrementing integer at intervalMs starting from 0
const timer = (intervalMs: number) => state.state$.pipe(
	tap((state)=>console.log(`[worklog.services.timer] detected a state change and will start ticking in a few moments if reactRendered===true`)),
	filter((state)=>state.reactRendered),
	delay(5000),
	switchMap( ()=> interval(intervalMs).pipe(
		tap(i => console.log("[worklog.services.timer] timer service go boom " + i)),
		map(x => x + "!") // I've always wanted to go out with a bang
	))
);

export default timer;