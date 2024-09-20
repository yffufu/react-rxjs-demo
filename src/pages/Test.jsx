import { useEffect, useRef } from "react";
import {
  map,
  fromEvent,
  throttleTime,
  take,
  last,
  first,
  skip,
  scan,
} from "rxjs";
import { useEventCallback } from "../hooks";

export default function Test() {
  const ref = useRef(null);
  const [callback]=useEventCallback(($event) => $event.pipe(
    throttleTime(100),
    take(3),
  ));
  useEffect(() => {
    const source$ = fromEvent(ref.current, "click").pipe(
      throttleTime(1000),
      scan((acc, curr) => [acc[0] + 1, curr], [0, null]),
      map(([c, e]) => [c, [e.clientX, e.clientY]])
    );
    const subscription = source$.subscribe(([c, [x, y]]) =>
      console.log("clicked at", x, y, " ", c, "times")
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return <button ref={ref}>Click me</button>;
}
const useDebounce = (fn, delay) => {
    const id = useRef();
    return (...args) => {
        clearTimeout(id.current);
        id.current = setTimeout(() => fn(...args), delay);
    };
};
