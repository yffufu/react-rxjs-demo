import { throwError } from "rxjs";

const source$ = throwError(() => new Error("Oops")); //立即抛出错误

source$.subscribe({
    error: (err) => console.error("Oops! Something went wrong!", err),
});