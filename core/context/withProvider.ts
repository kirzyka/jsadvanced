import { IContext } from "../interfaces/IContext";

export function withProvider<T>(context: IContext<T>, value: T, render: () => HTMLElement): HTMLElement {
    context._stack.push(value);

    try {
        return render();
    } finally {
        context._stack.pop();
    }
}
