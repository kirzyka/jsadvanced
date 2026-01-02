import { FC } from "../../types/FC";

export function updateComponent(component: HTMLElement, render: FC): HTMLElement {
    const next: HTMLElement = render();

    component.replaceWith(next);

    return next;
}
