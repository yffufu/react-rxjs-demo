import { delayWhen, of, timer } from "rxjs";

of(1, 2, 3)
  .pipe(delayWhen((x) => timer(x * 1000)))
  .subscribe((x) => console.log(x));
