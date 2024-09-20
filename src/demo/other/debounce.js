import { fromEvent, scan, debounce, interval } from 'rxjs';

fromEvent(document, 'click').pipe(
  scan(i => ++i, 1),
  debounce(i => interval(200 * i))
).subscribe(x => console.log(x));