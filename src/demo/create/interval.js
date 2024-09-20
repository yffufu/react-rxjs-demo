import { interval } from "rxjs";

const source$ = interval(1000);
source$.subscribe(x => console.log(x)); //每秒依次打印 0, 1, 2, 3, ...