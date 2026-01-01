import { div } from "@core/elements/div";
import { h1 } from "@core/elements/h1";

export function favoritesPage(): HTMLElement {
    return div()
        .children([h1().innerHTML("Избранное").get()])
        .className("flex flex-row flex-gap-10")
        .get();
}
