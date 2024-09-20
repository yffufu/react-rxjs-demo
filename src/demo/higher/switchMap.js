import { interval, take, switchMap } from "rxjs";

interval(100)
  .pipe(
    take(3),
    switchMap((x) => interval(x * 200).pipe(take(2))),
  )
  .subscribe((x) => console.log(x));
