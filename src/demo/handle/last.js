import { last, of } from "rxjs";
const source$ = of(1, 2, 3);
source$.subscribe((x) => console.log(x)); //1,2,3

const last$ = source$.pipe(last()); // takeLast 必须等到整个 observable 完成(complete)
last$.subscribe((x) => console.log(x)); //3
