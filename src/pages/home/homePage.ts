import { div } from "@core/elements/div";
import { span } from "@core/elements/span";
import { search } from "../../components/search/search";
import { cardList } from "../../components/card-list/cardList";
import { header } from "../../components/header/header";
import { appModel } from "../../model/appModel";
import { updateComponent } from "@core/utils/component/updateComponent";

export function homePage(): HTMLElement {
    const { books } = appModel;
    // components
    const getLabel = () => `Найдено книг: ${books.get().length}`;
    const label: HTMLElement = span().innerHTML(getLabel()).get();
    let list: HTMLElement = cardList({ books: books.get(), isLoading: false });

    books.subscribe(() => {
        label.innerHTML = getLabel();

        list = updateComponent(list, () => cardList({ books: books.get(), isLoading: false }));
    });

    return div().children([header(), search(), label, list]).className("flex flex-column flex-gap-10").get();
}
