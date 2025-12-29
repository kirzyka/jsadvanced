import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface IDiv extends IElement<HTMLDivElement> {}

export function div(): IDiv {
    const api: IElement<HTMLDivElement> = createElement<HTMLDivElement>("div");
    //const el: HTMLDivElement = api.get();

    return { ...api };
}
