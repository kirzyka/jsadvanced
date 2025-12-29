import { useContext } from "@core/context/useContext";
import { div } from "@core/elements/div";
import { input } from "@core/elements/input";
import { img } from "@core/elements/img";
import { ISignal } from "@core/interfaces/ISignal";
import { createSignal } from "@core/signal/createSignal";
import { debounce } from "@core/utils/input/debounce";
import { IAppModel } from "../../model/IAppModel";
import { appContext } from "../../context/appContext";

import "./search.css";

export function search(): HTMLElement {
    const ctx: IAppModel = useContext<IAppModel>(appContext);
    const searchString: ISignal<string> = createSignal<string>("");

    const onSearchStringInput = debounce((value: string) => {
        searchString.set(value);
        fetch(`https://openlibrary.org/search.json?q=${value}&offset=${0}&limit=${10}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                ctx.books.set(data.docs);
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
