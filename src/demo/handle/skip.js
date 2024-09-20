import { skip, of } from "rxjs";

const source$ = of(1, 2, 3);
source$.subscribe(console.log); // 1,2,3

const skip$ = source$.pipe(skip(2));
skip$.subscribe(console.log); // 3
