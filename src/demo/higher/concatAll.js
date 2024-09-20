import { concatAll, map, of } from "rxjs";

of(1, 2, 3)
  .pipe(
    map(() => of(1, 2, 3)),
    concatAll()
  )
  .subscribe(console.log);
// 1,2,3,1,2,3,1,2,3