import {interval, timer, takeUntil } from "rxjs";

const source$ = interval(1000);
source$.subscribe(console.log); // 0, 1, 2...

const takeUntil$ = source$.pipe(takeUntil(timer(2000))); // 取到2秒后停止
takeUntil$.subscribe(console.log); //0, 1
