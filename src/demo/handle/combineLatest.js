import { combineLatest, interval, take } from "rxjs";

const source$ = interval(100).pipe(take(5));
const source2$ = interval(150).pipe(take(5));
combineLatest([source2$, source$]).subscribe(console.log);
// [ 0, 0 ]
// [ 0, 1 ]
// [ 1, 1 ]
// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 3 ]
// [ 2, 4 ]
// [ 3, 4 ]
// [ 4, 4 ]