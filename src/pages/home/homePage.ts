import { useContext } from "@core/context/useContext";
import { div } from "@core/elements/div";
import { span } from "@core/elements/span";
import { a } from "@core/elements/a";
import { appContext } from "../../context/appContext";
import { IAppModel } from "../../model/IAppModel";
import { search } from "../../components/search/search";
import { cardList } from "../../components/card-list/cardList";
import { header } from "src/components/header/header";

export function homePage(): HTMLElement {
    const ctx: IAppModel = useContext<IAppModel>(appContext);

    // components
    const getLabel = () => `Найдено книг: ${ctx.books.get().length}`;
    const label: HTMLElement = span().innerHTML(getLabel()).get();
    let list: HTMLElement = cardList({ books: ctx.books.get() });

    ctx.books.subscribe(() => {
        label.innerHTML = getLabel();

        const newList = cardList({ books: ctx.books.get() });
        list.replaceWith(newList);
        list = newList;
    });

    return div().children([header(), search(), label, list]).className("flex flex-column flex-gap-10").get();
}
