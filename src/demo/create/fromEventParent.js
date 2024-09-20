import { fromEventPattern } from "rxjs";

class EventParent {
    lisenters = new Map();
    addEvent(event, handler) {
        if (!this.lisenters.has(event)) this.lisenters.set(event, []);
        this.lisenters.get(event).push(handler);
    }
    triggerEvent(event, data) {
        if (!this.lisenters.has(event)) return;
        const handlers = this.lisenters.get(event);
        handlers.forEach((handler) => handler(data));
    }
    removeEvent(event, handler) {
        if (!this.lisenters.has(event)) return;
        const handlers = this.lisenters.get(event);
        handlers.splice(handlers.indexOf(handler), 1);
    }
}
const eventParent = new EventParent();

const source$ = fromEventPattern((handler) => eventParent.addEvent('test', handler), eventParent.removeEvent)
source$.subscribe(console.log); // hello world

eventParent.triggerEvent('test', 'hello world');