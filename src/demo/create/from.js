import {from} from 'rxjs';

// 从数组创建
const sourceArray$ =from([1,2,3]);
sourceArray$.subscribe(x => console.log(x));//1,2,3

// 从promise创建
const sourcePromise$ =from(new Promise((resolve)=>{
    setTimeout(() => {
        resolve('hello world');
    }, 2000);
}));
sourcePromise$.subscribe(x => console.log(x));//hello world

// 从字符串创建
const sourceString$ =from('hello world');
sourceString$.subscribe(x => console.log(x));//h,e,l,l,o, ,w,o,r,l,d
