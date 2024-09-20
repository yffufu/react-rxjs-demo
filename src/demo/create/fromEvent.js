import { fromEvent } from "rxjs";

const eventSource$ = fromEvent(document, "click");
eventSource$.subscribe(event => console.log("clicked", event)); 