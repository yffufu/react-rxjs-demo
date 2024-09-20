import { NEVER } from "rxjs";

const never$ = NEVER; // 不会失败也不会完成
never$.subscribe(console.log);