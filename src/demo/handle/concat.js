import { concat, of } from "rxjs";

const source$ = of(1, 2, 3);

const source2$ = of(4, 5, 6);

concat(source$, source2$).subscribe(console.log); // 1,2,3,4,5,6
