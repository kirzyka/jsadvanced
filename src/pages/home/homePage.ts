import { div } from "../../core/elements/div";
import { span } from "../../core/elements/span";

export function homePage(): HTMLElement {
    return div()
        .children([span().innerHTML(`Число книг: ${200}`).get()])
        .className("main-page page")
        .get();
}
