import { div } from "../../../core/elements/div";
import { span } from "../../../core/elements/span";

export function header() {
    return div()
        .children([span().innerHTML("Header").get()])
        .className("header")
        .get();
}
