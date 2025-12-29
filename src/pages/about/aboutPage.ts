import { a } from "@core/elements/a";
import { div } from "@core/elements/div";

export function aboutPage(): HTMLElement {
    return div()
        .children([a().title("Home").innerHTML("About").href("#/").get(), a().innerHTML("Home").href("#/").get()])
        .className("flex flex-row flex-gap-10")
        .get();
}
