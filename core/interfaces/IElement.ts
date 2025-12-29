export interface IElement<T extends HTMLElement> {
    children(children: HTMLElement[]): this;
    attribute(name: string, value: string): this;
    className(...classNames: string[]): this;
    innerHTML(html: string): this;
    get(): T;
}
