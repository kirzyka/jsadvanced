import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface IH1 extends IElement<HTMLHeadingElement> {}

export function h1(): IH1 {
    const api: IElement<HTMLHeadingElement> = createElement<HTMLHeadingElement>("h1");
    const el: HTMLHeadingElement = api.get();

    return {
        ...api,
    };
}
