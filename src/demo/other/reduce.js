import { interval, reduce, take,  } from "rxjs";

interval(100).pipe(
    take(5),
    reduce((acc, value) => acc + value,0),
).subscribe((x) => console.log(x));