import { div } from "@core/elements/div";
import { updateComponent } from "@core/utils/component/updateComponent";
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
    };

    // components

    let list: HTMLElement = cardList({ books: books.get(), isLoading: false });

    books.subscribe(() => {
        list = updateComponent(list, () => cardList({ books: books.get(), isLoading: false }));
    });

    return div()
        .children([header(), search(state), list])
        .className("flex flex-column flex-gap-10")
        .get();
}
