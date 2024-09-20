操作符

创建类

Ob.of(1,2,3)
Ob.from(Array|Promise|String)
Ob.create(fn)
Ob.fromEvent(EventObject,EventName)
Ob.fromEventParent((hander)=>addEventListener(hander),(hander)=>removeEventListener(hander))
Ob.timer(start:number,sep?:number) //没有sep就是setTimeout,sep设置开始后间隔发送时间，timer(10,10)相当于interval(10)
Ob.interval(number) //setInterval
Ob.empty() //立即complete
Ob.never() //永远不会complete或者error
Ob.throw() //立即error






//1.数据转换
source$.map(x=>any)
source$.mapTo(any) //可以把传进来的值改成一个固定的
source$.filter(x=>bool)

//2.取出一定数量
source$.first()
source$.last()
source$.take(count:number)
source$.takeLast(count:number) //takeLast 必须等到整个 observable 完成(complete)
source$.takeUntil(observer$)
source$.skip(count:number)

//3.插入
source$.startWith(any) //插入第一个

//4.操作oberver
Ob.concat(...source$) //把多个 observable 实例合并成一个,首尾拼接
source$1.merge(source2$) //并行发出两个source,而不是首尾拼接
source$1.combineLatest(source2$,(x1,x2)=>any) //同时处理两个source,只要有一个发出，去另一个的最后一个组合一起发出
$main.withLatestFrom(source$,(x1,x2)=>any)  // withLatestFrom 运作方式跟 combineLatest 有点像，只是他有主从的关系，
                                            // 只有在主要的 observable 送出新的值时，才会执行 callback,
                                            // 但请注意如果 main 送出值时 source 之前没有送出过任何值 callback 仍然不会执行！
source$1.zip(source2$,(x1,x2)=>any) //取每个 observable 相同顺位的元素并传入 callback,（这个可能会堆积数据，少用）

//5.高阶:source$返回每条数据都是另一个source$，处理高阶的方式就是碾平送出
source$.concatAll() //首尾拼接
source$.mergeAll() //并行发出
source$.switch() //抛弃正在处理的而去立即处理最新的
source$.concatMap(x=>source2$) //相当于source$.map(x=>source2$).concatAll()
source$.mergeMap(x=>source2$) //相当于source$.map(x=>source2$).mergeAll()
source$.switchMap(x=>source2$) //相当于source$.map(x=>source2$).switch()
//6.其它
source$.scan((memo,cur)=>any,initial) //和reduce类似，但是每个item都会后传，而不是像reduce计算完每个item
source$.reduce((memo,cur)=>any,initial) //和Array.prototype.reduce()一样

source$.buffer(source2$) //缓存，返回数组
source$.bufferCount(count:number)
source$.bufferTime(millisecond:number)
source$.bufferToggle(sourceStart$,source$End$)
source$.bufferWhen(x=>source2$)

source$.window(source2$) //和buffer类似，返回observable
source$.windowCount(count:number)
source$.windowTime(millisecond:number)
source$.windowToggle(sourceStart$,sourceEnd$)
source$.windowWhen(x=>source2$)

source$.groupBy(x=>any)

source$.delay(millisecond:number) //延时一开始的发生时间
source$.delayWhen(x=>source2$) //可以单独影响每个元素，而且需要传一个 callback 并回传一个 observable

source$.debounce(source2$)
source$.debounceTime(millisecond:number)
source$.throttle(source2$)
source$.throttleTime(millisecond:number)

source$.distinct(fn?:()=>comparable,$clearCache?) //过滤掉相同值 abcca=>abc
source$.distinctUntilChanged() //只会过滤掉和上一个元素相同的值 abcca=>abca

source$.catch((error,self$)=>newSource$||Array||Promise||Iterable) //发生错误后跳转到返回的Obserable
source$.retry(retryCount?:number) //发生错误会重试，类似 source$.catch((_,source$)=>source$),但是可以传入重试次数
source$.retryWhen(errorObs$ => errorObs$.delay(1000)) //把例外发生的元素放到一个observable中,等到这个observable操作完后再重新订阅一次原本的observable
source$.repeat(repeatCount?:number) //顾名思义，重复订阅

source$.do(x=>{...}) //source$.map(x=>{...;return x}) debug用


2.rxjs特性

1.延时计算，不subscripe()就不运行代码

2.渐进式取值，一个值运行到底再运行下一个值



3.subject

//1.
const subject = new Rx.Subject()
subject.subscribe(...1)
subject.subscribe(...2)
source$.subscribe(subject)
subject.subscribe(...3) //无值

//2.订阅就立即给出最新的值，而不是没有回应
const subject = new Rx.BehaviorSubject(initial?:any)
subject.subscribe(...1)
subject.subscribe(...2)
source$.subscribe(subject)
subject.subscribe(...3) //得到最新值

//3.新订阅时重新发送最后的几个元素
const subject = new Rx.ReplaySubject()
subject.subscribe(...1)
subject.subscribe(...2)
source$.subscribe(subject)
subject.subscribe(...3)

//4.有点像last,只会送出最后一个值
const subject = new Rx.AsyncSubject()
subject.subscribe(...1) //得到最后一个元素
subject.subscribe(...2) //得到最后一个元素
source$.subscribe(subject)
subject.subscribe(...3) //得到最后一个元素
4.多播operators

const $=source$.multicast(new Rx.[Subject|BehaviorSubject|ReplaySubject|AsyncSubject]());
$.subscribe(...)
$.connect() //开始执行
$.subscirbe(..)

//2.建立一个只要有订阅就会自动 connect 的 observable，范例如下
source$.multicast(new Rx.Subject()).refCount()
$.subscribe(...) //开始执行
$.subscirbe(...)

//快捷方式
source$.publish() // multicaset(new Rx.Subject())
source$.publishReplay() // multicaset(new Rx.ReplaySubject())
source$.publishBehavior() // multicaset(new Rx.BehaviorSubject())
source$.publishLast() // multicaset(new Rx.AsyncSubject())
source$.share() // multicaset(new Rx.Subject()).refCount() == source$.publish().refCount()


4.Scheduler

Rx.Scheduler.async //异步调度，跟 asap 很像但是使用 setInterval 来运作，通常是跟时间相关的 operator 才会用到
Rx.Scheduler.asap //异步调度，非同步的执行，在浏览器其实就是 setTimeout 设为 0 秒 (在 NodeJS 中是用 process.nextTick)
Rx.Scheduler.queue //同步调度
Rx.Scheduler.animationFrame //异步调度，利用 Window.requestAnimationFrame 

//使用
Rx.Observable.from([1,2,3,4,5], Rx.Scheduler.async);//每个operator最后一个参数都能接受一个Scheduler来决定调度方式
Rx.Observable.from([1,2,3,4,5]).observeOn(Rx.Scheduler.async);