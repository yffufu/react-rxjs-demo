import { fromEvent, debounceTime } from "rxjs";

fromEvent(document, "click")
  .pipe(debounceTime(1000))
  .subscribe((x) => console.log(x));
