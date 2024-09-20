import { fromEvent, delay } from 'rxjs';

fromEvent(document, 'click').clicks.pipe(delay(1000)).subscribe(x => console.log(x));

const date = new Date('March 15, 2050 12:00:00');
fromEvent(document, 'click').pipe(delay(date)).subscribe(x => console.log(x));