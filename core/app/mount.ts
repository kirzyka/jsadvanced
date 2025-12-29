import { IMountedComponent } from "../interfaces/IMountComponent";

export function mount(component: () => HTMLElement): IMountedComponent {
    let el: HTMLElement = component();

    return {
        el,
        rerender() {
            const next: HTMLElement = component();
            el.replaceWith(next);
            el = next;
        },
    };
}
