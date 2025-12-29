import { ISignal } from "../interfaces/ISignal";

export function createSignal<T>(value: T): ISignal<T> {
    const listeners = new Set<() => void>();

    return {
        get() {
            return value;
        },
        set(next: T) {
            value = next;
            listeners.forEach((fn) => fn());
        },
        subscribe(fn: () => void) {
            listeners.add(fn);
            return () => listeners.delete(fn);
        },
    };
}
