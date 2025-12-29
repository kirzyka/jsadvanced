import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface IA extends IElement<HTMLAnchorElement> {
    title(title: string): IA;
    href(href: string): IA;
}

export function a(): IA {
    const api: IElement<HTMLAnchorElement> = createElement<HTMLAnchorElement>("a");
    const el: HTMLAnchorElement = api.get();

    return Object.assign(api, {
        title(title: string): IA {
            el.title = title;
            return this;
        },
        href(href: string): IA {
            el.href = href;
            return this;
        },
    });
}
