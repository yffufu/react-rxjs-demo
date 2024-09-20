import { zip,interval, take } from "rxjs";

const source$ = interval(100).pipe(take(5));
const source2$ = interval(130).pipe(take(5));

zip([source$,source2$]).subscribe(console.log);