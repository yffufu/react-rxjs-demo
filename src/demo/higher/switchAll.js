import { interval, take, map, switchAll } from "rxjs";

interval(100)
  .pipe(
    take(3),
    map((x) => interval(x * 200).pipe(take(2))),
    switchAll()
  )
  .subscribe((x) => console.log(x));
