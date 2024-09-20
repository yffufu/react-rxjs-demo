import { map, of, take, mergeAll, interval } from "rxjs";
of(1, 2, 3)
  .pipe(
    map((x) => interval(x * 100)),
    mergeAll(),
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