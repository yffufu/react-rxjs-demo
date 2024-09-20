import { useObservable } from "../hooks";
import { debounceTime, delay, fromEvent, map, throttleTime } from "rxjs";

export default function Follow() {
  const style = useObservable(
    () =>
      fromEvent(document, "mousemove").pipe(
        throttleTime(10),
        map((e) => ({ x: e.clientX, y: e.clientY }))
      ),
    { x: 0, y: 0 }
  );
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {Array(20)
        .fill(null)
        .map((_, i) => (
          <DelayItem style={style} index={i} key={i} />
        ))}
    </div>
  );
}

function DelayItem({ style, index }) {
  const finalStyle = useObservable(
    (_, state$) =>
      state$.pipe(
        delay(index * 10),
        map(([x, y]) => ({
          transform: `translate(${x}px, ${y}px)`,
          background: `hsl(${index * 10}, 100%, 50%)`,
        }))
      ),
    {},
    [style.x, style.y]
  );
  return <div style={finalStyle} className="follow-box"></div>;
}
