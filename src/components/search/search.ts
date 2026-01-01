import { div } from "@core/elements/div";
import { input } from "@core/elements/input";
import { img } from "@core/elements/img";
import { ISignal } from "@core/interfaces/ISignal";
import { createSignal } from "@core/signal/createSignal";
import { debounce } from "@core/utils/input/debounce";
import { HomePageState } from "../../pages/home/homePage";
import { span } from "@core/elements/span";
import { button } from "@core/elements/button";

export function search(homePageState: HomePageState): HTMLElement {
    const { books, totalFound, page, pageSize } = homePageState;
    const searchString: ISignal<string> = createSignal<string>("");    
    const fields = "key,title,author_name,cover_edition_key,subject";

    const getCountLabel = () => `Найдено книг: ${totalFound.get()}`;
    const countLabel: HTMLElement = span().innerHTML(getCountLabel()).className("line-28").get();
    const getPageLabel = () => `Страница: ${page.get()}`;
    const pageLabel: HTMLElement = span().innerHTML(getPageLabel()).className("line-28").get();

    const doSearch = () => {
        const query: string = searchString.get();
        const offset: number = (page.get() - 1) * pageSize;

        if (query.length > 2) {
            fetch(`https://openlibrary.org/search.json?q=${query}&offset=${offset}&limit=${pageSize}&fields=${fields}`)
                .then((res) => res.json())
                .then((data) => {
                    const { docs, numFound } = data;

                    books.set(.docs);
                    totalFound.set(numFound);
                });
        }
    };

    const onSearchStringInput = debounce((value: string) => {
        searchString.set(value);
    }, 500);

    searchString.subscribe(() => doSearch());
    totalFound.subscribe(() => (countLabel.innerHTML = getCountLabel()));
    page.subscribe(() => {
        pageLabel.innerHTML = getPageLabel();
        doSearch()
    });

    return div()
        .children([
            div()
                .children([
                    input()
                        .attribute("type", "text")
                        .attribute("placeholder", "Введите название книги")
                        //.attribute("name", "searchGield")
                        .value(searchString.get())
                        .onInput(onSearchStringInput)
                        .get(),
                    img().src("/static/search.svg").attribute("alt", "search").top("12px").left("10px").className("absolute").get(),
                ])
                .className("relative flex flex-row  flex-grow")
                .get(),
            div()
                .children([
                    countLabel,
                    div()
                        .children([
                            pageLabel,
                            button()
                                .children([img().src("/static/arrow-left.svg").get()])
                                .width("30px")
                                .height("30px")
                                .onClick(() => page.set(page.get() - 1))
                                .get(),
                            button()
                                .children([img().src("/static/arrow-right.svg").get()])
                                .width("30px")
                                .height("30px")
                                .onClick(() => page.set(page.get() + 1))
                                .get(),
                        ])
                        .className("flex flex-row gap-10")
                        .get(),
                ])
                .className("flex flex-row align-center justify-between flex-gap-10")
                .get(),
        ])
        .className("flex flex-column flex-gap-10")
        .get();
}
