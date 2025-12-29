import { IContext } from "../interfaces/IContext";

export function useContext<T>(context: IContext<T>): T {
    const value = context._stack[context._stack.length - 1];

    if (!value) {
        throw new Error("useContext called outside of provider");
    }

    return value;
}
