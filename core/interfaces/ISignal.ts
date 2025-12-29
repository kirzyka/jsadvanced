export interface ISignal<T> {
    get(): T;
    set(value: T): void;
    subscribe(fn: () => void): () => void;
}
