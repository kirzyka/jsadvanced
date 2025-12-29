import { IElement } from "../interfaces/IElement";
import { createElement } from "./createElement";

interface IInput extends IElement<HTMLInputElement> {
    value(value: string): IInput;
    onInput(callback: (value: string) => void): IInput;
    onChange(callback: (value: string) => void): IInput;
}

export function input(): IInput {
    const api: IElement<HTMLInputElement> = createElement<HTMLInputElement>("input");
    const el: HTMLInputElement = api.get();

    return Object.assign(api, {
        value(value: string): IInput {
            el.value = value.trim();
            return this;
        },
        onInput(callback: (value: string) => void): IInput {
            el.addEventListener("input", (event: Event) => {
                const target: HTMLInputElement = event.target as HTMLInputElement;
                const value: string = target.value.trim();

                callback(value);
            });
            return this;
        },
        onChange(callback: (value: string) => void): IInput {
            el.addEventListener("change", (event: Event) => {
                const target: HTMLInputElement = event.target as HTMLInputElement;
                const value: string = target.value.trim();

                callback(value);
            });
            return this;
        },
    });
}
