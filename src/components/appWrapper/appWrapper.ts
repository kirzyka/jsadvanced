import { div } from "@core/elements/div";
import { FC } from "@core/types/FC";
import { header } from "../header/header";

export function appWrapper(children: FC): HTMLElement {
    return div().children([header(), children()]).className("relative h-full bg-primary text-primary px-20").get();
}
