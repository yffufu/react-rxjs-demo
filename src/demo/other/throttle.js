import { fromEvent, throttle, interval } from "rxjs";

fromEvent(document, "click")
  .pipe(throttle(() => interval(1000)))
  .subscribe((x) => console.log(x));
