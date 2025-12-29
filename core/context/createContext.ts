import { IContext } from "../interfaces/IContext";

export function createContext<T>(): IContext<T> {
    return {
        _stack: [],
    };
}
