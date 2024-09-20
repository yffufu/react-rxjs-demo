import { debounceTime, from, map, switchMap } from 'rxjs';
import { useEffect, useState, useCallback } from 'react';
import useConstant from 'use-constant';
import { BehaviorSubject, Subject } from 'rxjs';
export function useEventCallback(callback, initialState) {
    const [state,setState] = useState(initialState);
    const event$ = useConstant(() => new Subject());
    
    useEffect(()=>{
        let subscription=callback(event$).subscribe(e=>{
            setState(e)
        })
        return ()=>{
            subscription.unsubscribe()
        }
    },[])
    return [
        useCallback((value) => {
            event$.next(value);
        },[]),
        state
    ]
}
export function useObservable(callback, initialState,deps=[]) {
    const [state,setState] = useState(initialState);
    const event$ = useConstant(() => new BehaviorSubject(initialState));
    const deps$ = useConstant(() => new BehaviorSubject(deps));
    useEffect(()=>{
        deps$.next(deps)
    },deps)
    useEffect(()=>{
        let subscription=callback(event$,deps$).subscribe(e=>{
            setState(e)
        })
        return ()=>{
            subscription.unsubscribe()
        }
    },[])
    return state
}