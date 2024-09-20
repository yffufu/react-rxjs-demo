import { of, map } from 'rxjs'

const source$ = of(1, 2, 3)
source$.subscribe(console.log) // 1,2,3

const mapped$ = source$.pipe(map((x) => x * 2));
mapped$.subscribe(console.log); // 2,4,6