import React from "react";
import { useEventCallback } from "../hooks";
import {
  fromEvent,
  withLatestFrom,
  map,
  switchMap,
  takeUntil,
  concatMap,
  concatAll,
} from "rxjs";
export default function Drag() {
  const [onMouseDown, [x, y]] = useEventCallback(
    (event$) =>
      event$.pipe(
        map((event) => {
          let eleStyle = getComputedStyle(event.currentTarget || event.target);
          const startX = parseFloat(eleStyle.left) - event.clientX;
          const startY = parseFloat(eleStyle.top) - event.clientY;
          return [startX, startY];
        }),
        map(([startX, startY]) =>
          fromEvent(document, "mousemove").pipe(
            map((moveEvent) => [
              moveEvent.clientX + startX, //鼠标偏移x,
              moveEvent.clientY + startY, //鼠标偏移y
            ]),
            takeUntil(fromEvent(document, "mouseup"))
          )
        ),
        concatAll()
      ),
    [0, 0]
  );
  return (
    <div className="drag-container">
      <div
        className="drag-box"
        style={{ left: x, top: y }}
        onMouseDown={onMouseDown}
      ></div>
    </div>
  );
}
