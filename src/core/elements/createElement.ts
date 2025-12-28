import { IElement } from "../interfaces/IElement";

export function createElement<T extends HTMLElement>(tagName: string): IElement {
    const element = document.createElement(tagName) as T;

    return {
        get(): T {
            return element;
        },
        children(children: HTMLElement[]): IElement {
            children.forEach((child) => {
                element.appendChild(child);
            });
            return this;
        },
        className(classNames: string): IElement {
            classNames.split(" ").forEach((className) => {
                element.classList.add(className);
            });
            return this;
        },
    };
}
