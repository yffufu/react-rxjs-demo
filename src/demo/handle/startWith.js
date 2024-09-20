import { EMPTY,startWith } from "rxjs";

const source$ = EMPTY.pipe(startWith(1));
source$.subscribe(console.log);//1