import { fromEvent, throttleTime } from "rxjs";

fromEvent(document, "click")
  .pipe(throttleTime(1000))
  .subscribe((x) => console.log(x));
