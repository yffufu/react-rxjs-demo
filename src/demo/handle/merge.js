import { interval, merge, take } from "rxjs";

const source1$ = interval(100).pipe(take(5));
const source2$ = interval(150).pipe(take(5));

merge(source1$,source2$).subscribe(console.log);
// 0
// 0
// 1
// 1
// 2
// 3
// 2
// 4
// 3
// 4