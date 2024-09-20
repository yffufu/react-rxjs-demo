import { of } from 'rxjs';

const source$ = of(1, 2, 3);
source$.subscribe(x => console.log(x));//1,2,3