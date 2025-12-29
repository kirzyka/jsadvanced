import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface IButton extends IElement<HTMLButtonElement> {
    onClick(callback: () => void): IButton;
}

export function button(): IButton {
    const api: IElement<HTMLButtonElement> = createElement<HTMLButtonElement>("button");
    const el: HTMLButtonElement = api.get();

    return Object.assign(api, {
        onClick(callback: () => void): IButton {
            el.addEventListener("click", callback);
            return this;
        },
    });
}
