import { div } from "@core/elements/div";
import { bindComponent } from "@core/utils/component/bindComponent";
import { createSignal } from "@core/signal/createSignal";
import { ISignal } from "@core/interfaces/ISignal";
import { getHashQuery } from "@core/navigation/getHashQuery";
import { Book } from "../../types/Book";
import { search } from "../../components/search/search";
import { cardList } from "../../components/card-list/cardList";
import { loadingIndicator } from "../../components/loadingIndicator/loadingIndicator";

export interface HomePageState {
    searchString: ISignal<string>;
    page: ISignal<number>;
    pageSize: number;
    isLoading: ISignal<boolean>;
    totalFound: ISignal<number>;
    books: ISignal<Book[]>;
}

const PAGE_SIZE: number = 8;

export function homePage(): HTMLElement {
    const hashQuery: URLSearchParams = getHashQuery();
    const searchString: ISignal<string> = createSignal<string>(hashQuery.get("q") || "");
    const page: ISignal<number> = createSignal<number>(Number(hashQuery.get("p") || 1));
    const pageSize: number = PAGE_SIZE;
    const isLoading: ISignal<boolean> = createSignal<boolean>(false);
    const totalFound: ISignal<number> = createSignal<number>(0);
    const books: ISignal<Book[]> = createSignal<Book[]>([]);

    const state: HomePageState = {
        searchString,
        totalFound,
        books,
        page,
        pageSize,
        isLoading,
    };

    return div()
        .children([
            div()
                .children([search(state), bindComponent([books], () => cardList({ books }))])
                .className("flex flex-column flex-grow flex-gap-10")
                .get(),
            bindComponent([isLoading], () => loadingIndicator(isLoading)),
        ])
        .className("relative flex flex-grow")
        .get();
}
