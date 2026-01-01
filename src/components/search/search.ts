import { div } from "@core/elements/div";
import { input } from "@core/elements/input";
import { img } from "@core/elements/img";
import { ISignal } from "@core/interfaces/ISignal";
import { createSignal } from "@core/signal/createSignal";
import { debounce } from "@core/utils/input/debounce";
import { bindComponent } from "@core/utils/component/bindComponent";
import { HomePageState } from "../../pages/home/homePage";
import { totalFoundLabel } from "./totalFoundLabel";
import { paginator } from "./paginator";

export function search(homePageState: HomePageState): HTMLElement {
    const { books, totalFound, page, pageSize } = homePageState;
    const searchString: ISignal<string> = createSignal<string>("");
    const fields = "key,title,author_name,cover_edition_key,subject";

    const countLabel: HTMLElement = bindComponent([totalFound], () => totalFoundLabel({ totalFound }));
    const controls: HTMLElement = bindComponent([totalFound, page], () => paginator({ totalFound, page, pageSize }));

    const doSearch = () => {
        const query: string = searchString.get();
        const offset: number = (page.get() - 1) * pageSize;

        if (query.length > 2) {
            fetch(`https://openlibrary.org/search.json?q=${query}&offset=${offset}&limit=${pageSize}&fields=${fields}`)
                .then((res) => res.json())
                .then((data) => {
                    const { docs, numFound } = data;

                    books.set(docs);
                    totalFound.set(numFound);
                });
        }
    };

    const onSearchStringInput = debounce((value: string) => {
        searchString.set(value);
    }, 500);

    searchString.subscribe(() => page.set(1));
    page.subscribe(() => {
        doSearch();
    });

    return div()
        .children([
            div()
                .children([
                    input()
                        .attribute("type", "text")
                        .attribute("placeholder", "Введите название книги")
                        .value(searchString.get())
                        .onInput(onSearchStringInput)
                        .get(),
                    img().src("/static/search.svg").attribute("alt", "search").top("12px").left("10px").className("absolute").get(),
                ])
                .className("relative flex flex-row  flex-grow")
                .get(),
            div().children([countLabel, controls]).className("flex flex-row align-center justify-between flex-gap-10").get(),
        ])
        .className("flex flex-column flex-gap-10")
        .get();
}
