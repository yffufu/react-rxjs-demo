import { of, takeLast } from "rxjs";

const source$ = of(1, 2, 3);
source$.subscribe(console.log); //1,2,3

const takeLast$ = source$.pipe(takeLast(2));
takeLast$.subscribe(console.log); //2,3
