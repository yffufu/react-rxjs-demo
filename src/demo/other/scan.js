import {interval, scan, take } from "rxjs";
interval(100).pipe(
    take(5),
    scan((acc, value) => acc + value, 0),
).subscribe(console.log);

// 0
// 1
// 3
// 6
// 10