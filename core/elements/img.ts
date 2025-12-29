import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface IImage extends IElement<HTMLImageElement> {
    src(src: string): IImage;
    alt(alt: string): IImage;
}

export function img(): IImage {
    const api: IElement<HTMLImageElement> = createElement<HTMLImageElement>("img");
    const el: HTMLImageElement = api.get();

    return Object.assign(api, {
        src(src: string): IImage {
            el.src = src;
            return this;
        },
        alt(alt: string): IImage {
            el.alt = alt;
            return this;
        },
    });
}
