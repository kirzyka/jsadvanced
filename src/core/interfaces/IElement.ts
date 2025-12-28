export interface IElement {
    children(children: HTMLElement[]): IElement;
    className(...classNames: string[]): IElement;
    get(): HTMLElement;
}
