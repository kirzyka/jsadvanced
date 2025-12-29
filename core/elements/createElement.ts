import { IElement } from "../interfaces/IElement";

export function createElement<T extends HTMLElement>(tagName: string): IElement<T> {
    const el: T = document.createElement(tagName) as T;

    return {
        children(children: HTMLElement[]): IElement<T> {
            children.forEach((child) => {
                el.appendChild(child);
            });
            return this;
        },
        className(classNames: string): IElement<T> {
            classNames.split(" ").forEach((className) => {
                el.classList.add(className);
            });
            return this;
        },

        innerHTML(html: string): IElement<T> {
            el.innerHTML = html;
            return this;
        },
        get(): T {
            return el;
        },
    };
}
