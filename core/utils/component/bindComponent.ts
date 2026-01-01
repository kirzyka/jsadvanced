import { FC } from "@core/types/FC";
import { ISignal } from "@core/interfaces/ISignal";
import { updateComponent } from "./updateComponent";

function autoUnsubscribe(getEl: FC, unsubs: (() => void)[]) {
    const observer = new MutationObserver(() => {
        const el: HTMLElement = getEl();

        if (!document.body.contains(el)) {
            unsubs.forEach((u) => u());
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

export function bindComponent(signals: ISignal<any>[], render: FC): HTMLElement {
    let el: HTMLElement = render();

    const unsubscribers = signals.map((signal: ISignal<any>) =>
        signal.subscribe(() => {
            el = updateComponent(el, render);
        })
    );

    autoUnsubscribe(() => el, unsubscribers);

    return el;
}
