import { div } from "@core/elements/div";
import { bindComponent } from "@core/utils/component/bindComponent";
import { createSignal } from "@core/signal/createSignal";
import { ISignal } from "@core/interfaces/ISignal";
import { search } from "../../components/search/search";
import { cardList } from "../../components/card-list/cardList";
import { Book } from "../../types/Book";
import { loadingIndicator } from "../../components/loadingIndicator/loadingIndicator";

export interface HomePageState {
    totalFound: ISignal<number>;
    books: ISignal<Book[]>;
    page: ISignal<number>;
    pageSize: number;
    isLoading: ISignal<boolean>;
}

const PAGE_SIZE: number = 8;

export function homePage(): HTMLElement {
    const totalFound: ISignal<number> = createSignal<number>(0);
    const books: ISignal<Book[]> = createSignal<Book[]>([]);
    const page: ISignal<number> = createSignal<number>(1);
    const pageSize: number = PAGE_SIZE;
    const isLoading: ISignal<boolean> = createSignal<boolean>(false);
    const state: HomePageState = {
        totalFound,
        books,
        page,
        pageSize,
        isLoading,
    };

    return div()
        .children([search(state), bindComponent([books], () => cardList({ books })), bindComponent([isLoading], () => loadingIndicator(isLoading))])
        .className("flex flex-column flex-gap-10")
        .get();
}
