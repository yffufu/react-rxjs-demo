import { concatMap, of } from "rxjs";

of(1, 2, 3)
  .pipe(concatMap(() => of(1, 2, 3)))
  .subscribe(console.log);
// 1,2,3,1,2,3,1,2,3
