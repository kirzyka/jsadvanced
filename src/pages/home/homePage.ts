import { div } from "@core/elements/div";
import { bindComponent } from "@core/utils/component/bindComponent";
import { span } from "@core/elements/span";
import { createSignal } from "@core/signal/createSignal";
import { ISignal } from "@core/interfaces/ISignal";
import { search } from "../../components/search/search";
import { cardList } from "../../components/card-list/cardList";
import { header } from "../../components/header/header";
import { Book } from "../../types/Book";

export interface HomePageState {
    totalFound: ISignal<number>;
    books: ISignal<Book[]>;
    page: ISignal<number>;
    pageSize: number;
    isLoading: ISignal<boolean>;
}
export function homePage(): HTMLElement {
    const totalFound: ISignal<number> = createSignal<number>(0);
    const books: ISignal<Book[]> = createSignal<Book[]>([]);
    const page: ISignal<number> = createSignal<number>(1);
    const pageSize: number = 6;
    const isLoading: ISignal<boolean> = createSignal<boolean>(false);
    const state: HomePageState = {
        totalFound,
        books,
        page,
        pageSize,
        isLoading,
    };

    // components

    const list: HTMLElement = bindComponent([books, isLoading], () => {
        if (isLoading.get()) {
            return div()
                .children([span().innerHTML("Загрузка...").get()])
                .className("flex items-center justify-center")
                .get();
        }
        return cardList({ books });
    });

    return div()
        .children([header(), search(state), list])
        .className("flex flex-column flex-gap-10")
        .get();
}
