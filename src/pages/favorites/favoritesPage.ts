import { div } from "@core/elements/div";
import { bindComponent } from "@core/utils/component/bindComponent";
import { cardList } from "../../components/card-list/cardList";
import { appModel } from "../../model/appModel";

export function favoritesPage(): HTMLElement {
    const { favorites } = appModel;

    return div()
        .children([bindComponent([favorites], () => cardList({ books: favorites }))])
        .className("relative flex flex-grow h-min-0")
        .get();
}
