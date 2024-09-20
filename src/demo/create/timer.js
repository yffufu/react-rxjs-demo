import { timer } from "rxjs";

const source$ = timer(1000);
source$.subscribe(console.log); // 1秒后打印 0

const source2$ = timer(2000, 1000);
source2$.subscribe(console.log); // 2秒后打印 0, 之后每1秒依次打印1、2、3...