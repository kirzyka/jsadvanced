export interface IPage {
    app: HTMLElement;
    setTitle(title: string): void;
    render(): void;
    destroy(): void;
}
