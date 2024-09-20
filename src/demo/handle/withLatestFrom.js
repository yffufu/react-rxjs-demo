import { interval, take, withLatestFrom } from "rxjs";

const source$ = interval(100).pipe(take(5));
const source2$ = interval(130).pipe(take(5));

source$.pipe(withLatestFrom(source2$)).subscribe(console.log);

// [ 1, 0 ]
// [ 2, 1 ]
// [ 3, 2 ]
// [ 4, 2 ]
