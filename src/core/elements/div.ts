import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface IDiv extends IElement {}

export function div(): IDiv {
    const api: IElement = createElement<HTMLDivElement>("div");
    //const el: HTMLDivElement = api.get();

    return { ...api };
}
