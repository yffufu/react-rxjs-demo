import { EMPTY } from "rxjs";

const source$ = EMPTY; // 立即完成
source$.subscribe({
    complete() {
        console.log("complete");
    },
});