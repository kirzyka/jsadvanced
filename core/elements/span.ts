import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface ISpan extends IElement<HTMLSpanElement> {}

export function span(): ISpan {
    const api: IElement<HTMLSpanElement> = createElement<HTMLSpanElement>("span");
    const el: HTMLSpanElement = api.get();

    return {
        ...api,
    };
}
