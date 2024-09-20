import { Observable } from "rxjs";

const ob$ = new Observable((subscriber) => {
  subscriber.next(1); //执行
  setTimeout(() => {
    subscriber.next(2);
  }, 2000);
  // subscriber.complete();
});

const subscription = ob$.subscribe(console.log); //订阅
setTimeout(() => {
  subscription.unsubscribe(); //取消订阅
}, 1000);
