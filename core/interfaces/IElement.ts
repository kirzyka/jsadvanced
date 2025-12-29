export interface IElement<T extends HTMLElement> {
    children(children: HTMLElement[]): this;
    className(...classNames: string[]): this;
    innerHTML(html: string): this;
    get(): T;
}
