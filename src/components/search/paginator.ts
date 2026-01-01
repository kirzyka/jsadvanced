import { button } from "@core/elements/button";
import { div } from "@core/elements/div";
import { img } from "@core/elements/img";
import { span } from "@core/elements/span";
import { ISignal } from "@core/interfaces/ISignal";

interface Props {
    totalFound: ISignal<number>;
    page: ISignal<number>;
    pageSize: number;
}

export function paginator({ totalFound, page, pageSize }: Props) {
    const pageLabel: HTMLElement = span().innerHTML(`Страница: ${page.get()}`).className("line-28").get();
    const prevBtn: HTMLElement = button()
        .children([img().src("/static/arrow-left.svg").get()])
        .width("30px")
        .height("30px")
        .onClick(() => page.get() > 1 && page.set(page.get() - 1))
        .get();
    const nextBtn: HTMLElement = button()
        .children([img().src("/static/arrow-right.svg").get()])
        .width("30px")
        .height("30px")
        .onClick(() => page.get() < Math.ceil(totalFound.get() / pageSize) && page.set(page.get() + 1))
        .get();
    const children: HTMLElement[] = [pageLabel, prevBtn, nextBtn];

    return div()
        .children(totalFound.get() > 0 ? children : [])
        .className("flex flex-row gap-10")
        .get();
}
