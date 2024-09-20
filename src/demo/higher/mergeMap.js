import { of, take, mergeMap, interval } from "rxjs";
of(1, 2, 3)
  .pipe(
    mergeMap((x) => interval(x * 100)),
    take(10)
  )
  .subscribe((x) => console.log(x));
//   0
//   0
//   1
//   0
//   2
//   1
//   3
//   4
//   1
//   2