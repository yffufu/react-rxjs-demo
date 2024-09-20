import { first, of } from "rxjs";

const source$ = of(1, 2, 3);
source$.subscribe((x) => console.log(x)); //1,2,3

const first$ = source$.pipe(first());
first$.subscribe((x) => console.log(x)); //1
