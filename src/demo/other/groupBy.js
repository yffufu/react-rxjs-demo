import { of, groupBy, mergeMap, reduce } from "rxjs";

of(
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Parcel" },
  { id: 2, name: "webpack" },
  { id: 1, name: "TypeScript" },
  { id: 3, name: "TSLint" }
)
  .pipe(
    groupBy((p) => p.id),
    mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
  )
  .subscribe((p) => console.log(p));
