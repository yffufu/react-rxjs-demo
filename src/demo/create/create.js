import { Observable } from 'rxjs'

const source$ = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
    setTimeout(() => {
        observer.next(3)
    })
    observer.complete()
})

source$.subscribe(console.log) // 1,2
source$.subscribe({
    next: (x) => console.log('observerA:', x),
    complete: () => console.log('observerA completed'),
    error: (e) => console.log('observerA error:', e),
})