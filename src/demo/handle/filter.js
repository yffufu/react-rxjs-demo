import { of, filter } from "rxjs";

const source$ = of(1, 2, 3);
source$.subscribe(console.log); // 1,2,3

const filterred$ = source$.pipe(filter((x) => x < 2));
filterred$.subscribe(console.log); // 1
