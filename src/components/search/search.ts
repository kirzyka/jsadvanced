import { div } from "@core/elements/div";
import { input } from "@core/elements/input";
import { img } from "@core/elements/img";
import { ISignal } from "@core/interfaces/ISignal";
import { createSignal } from "@core/signal/createSignal";
import { debounce } from "@core/utils/input/debounce";
import { appModel } from "src/model/appModel";

import "./search.css";

export function search(): HTMLElement {
    const { books } = appModel;
    const searchString: ISignal<string> = createSignal<string>("");
    const fields = "key,title,author_name,cover_edition_key,subject";
    const onSearchStringInput = debounce((value: string) => {
        searchString.set(value);
        fetch(`https://openlibrary.org/search.json?q=${value}&offset=${0}&limit=${10}&fields=${fields}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                books.set(data.docs);
            });
    }, 500);

    return div()
        .children([
            input()
                .attribute("type", "text")
                .attribute("placeholder", "Введите название книги")
                .attribute("name", "searchGield")
                .value(searchString.get())
                .onInput(onSearchStringInput)
                .className("search-input")
                .get(),
            img().src("/static/search.svg").attribute("alt", "search").className("search-icon").get(),
        ])
        .className("relative flex flex-row flex-grow")
        .get();
}
