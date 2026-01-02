import { div } from "@core/elements/div";
import { input } from "@core/elements/input";
import { img } from "@core/elements/img";
import { debounce } from "@core/utils/input/debounce";
import { bindComponent } from "@core/utils/component/bindComponent";
import { setHashQuery } from "@core/navigation/setHashQuery";
import { HomePageState } from "../../pages/home/homePage";
import { appModel } from "../../model/appModel";
import { totalFoundLabel } from "./totalFoundLabel";
import { paginator } from "./paginator";

export function search(homePageState: HomePageState): HTMLElement {
    const { lastSearchHref } = appModel;
    const { searchString, page, pageSize, isLoading, totalFound, books } = homePageState;
    const fields = "key,title,author_name,cover_edition_key,subject";

    const countLabel: HTMLElement = bindComponent([totalFound], () => totalFoundLabel({ totalFound }));
    const controls: HTMLElement = bindComponent([totalFound, page], () => paginator({ totalFound, page, pageSize }));

    const doSearch = () => {
        const query: string = searchString.get();
        const offset: number = (page.get() - 1) * pageSize;

        if (query.length > 2) {
            isLoading.set(true);
            fetch(`https://openlibrary.org/search.json?q=${query}&offset=${offset}&limit=${pageSize}&fields=${fields}`)
                .then((res) => res.json())
                .then((data) => {
                    const { docs, numFound } = data;

                    books.set(docs);
                    totalFound.set(numFound);
                })
                .finally(() => isLoading.set(false));
        }
    };

    const onSearchStringInput = debounce((value: string) => {
        searchString.set(value);
    }, 500);

    const updateHashQuery = () => {
        setHashQuery({ q: searchString.get(), p: page.get() });
        lastSearchHref.set(location.hash);
    };

    searchString.subscribe(() => {
        page.set(1);
        updateHashQuery();
    });
    page.subscribe(() => {
        doSearch();
        updateHashQuery();
    });

    lastSearchHref.set(location.hash);
    doSearch();

    return div()
        .children([
            div()
                .children([
                    input()
                        .attribute("name", "txtSearch")
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
