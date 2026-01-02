import { a } from "../elements/a";
import { div } from "../elements/div";

export function page404() {
    return div()
        .children([
            div().innerHTML("Ooops! Page not found.").className("text-16 font-bold").get(),
            a().href("#/").innerHTML("Go to main page").className("text-14").get(),
        ])
        .className("flex flex-column justify-center items-center gap-20 w-full h-full")
        .get();
}
