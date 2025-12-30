import { IElement } from "../interfaces/IElement";

export function createElement<T extends HTMLElement>(tagName: string): IElement<T> {
    const el: T = document.createElement(tagName) as T;

    return {
        children(children: HTMLElement[]): IElement<T> {
            children.forEach((child) => {
                if (child) {
                    el.appendChild(child);
                }
            });
            return this;
        },
        attribute(name: string, value: string): IElement<T> {
            el.setAttribute(name, value);
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
        width(value: string): IElement<T> {
            el.style.width = value;
            return this;
        },
        height(value: string): IElement<T> {
            el.style.height = value;
            return this;
        },
        minWidth(value: string): IElement<T> {
            el.style.minWidth = value;
            return this;
        },
        minHeight(value: string): IElement<T> {
            el.style.minHeight = value;
            return this;
        },
        get(): T {
            return el;
        },
    };
}
