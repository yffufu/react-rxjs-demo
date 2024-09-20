import { bufferToggle, interval, take, timer } from "rxjs";

interval(100)
  .pipe(
    take(32),
    bufferToggle(timer(500), () => timer(1000)) //500...1500
  )
  .subscribe((x) => console.log(x));

//   [
//     4,  5,  6,  7,  8,
//     9, 10, 11, 12, 13
//   ]
