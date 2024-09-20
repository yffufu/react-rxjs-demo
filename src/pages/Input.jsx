// import { useState } from 'react';
// import { useObservable ,useEventCallback} from 'rxjs-hooks';
import { concatMap, debounceTime, from, map, mergeMap, switchMap,switchAll, concatAll, mergeAll } from "rxjs";
import { useEventCallback } from "../hooks";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
//# sourceMappingURL=use-event-callback.js.map
const fetchData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: data });
    }, Math.random() * 2000);
  });
};
export default function Input() {
  const [callback, data] = useEventCallback(
    (input$) =>
      
      input$.pipe(
        map((text) => fetchData(text)),
        mergeAll(),
        map((data) => {
          return data.data;
        })
      ),



    ""
  );

  return (
    <div>
      <input type="text" onChange={(e) => callback(e.target.value)} />
      <div>
        <hr />
        {data}
      </div>
    </div>
  );
}













export function Input2() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={async (e) => {
          setText((await fetchData(e.target.value)).data);
        }}
      />
      <div>
        <hr />
        {text}
      </div>
    </div>
  );
}

export function Input3() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const memo = useRef(null);
  useEffect(() => {
    memo.current = text;
    fetchData(text).then((data) => {
      if (text !== data.data) {
        return;
      }
      setData(data.data);
    });
  }, [text]);

  return (
    <div>
      <input
        type="text"
        onChange={async (e) => {
          setText(e.target.value);
        }}
      />
      <div>
        <hr />
        {data}
      </div>
    </div>
  );
}
