import { ISignal } from "@core/interfaces/ISignal";
import { updateComponent } from "./updateComponent";

export function autoUnsubscribe(getEl: () => HTMLElement, unsubs: (() => void)[]) {
    const observer = new MutationObserver(() => {
        const el: HTMLElement = getEl();

        if (!document.body.contains(el)) {
            unsubs.forEach((u) => u());
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

export function bindComponent(signals: ISignal<any>[], render: () => HTMLElement): HTMLElement {
    let el: HTMLElement = render();

    const unsubscribers = signals.map((signal: ISignal<any>) =>
        signal.subscribe(() => {
            el = updateComponent(el, render);
        })
    );

    autoUnsubscribe(() => el, unsubscribers);

    return el;
}
