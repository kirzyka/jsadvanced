import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface ISpan extends IElement {
    innerHTML(html: string): ISpan;
}

export function span(): ISpan {
    const api: IElement = createElement<HTMLSpanElement>("span");
    const el: HTMLSpanElement = api.get();

    return {
        ...api,
        innerHTML(html: string): ISpan {
            el.innerHTML = html;
            return this;
        },
    };
}
