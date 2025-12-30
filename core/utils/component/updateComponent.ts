export function updateComponent(component: HTMLElement, render: () => HTMLElement): HTMLElement {
    const next: HTMLElement = render();

    component.replaceWith(next);

    return next;
}
