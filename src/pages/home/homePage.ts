import { useContext } from "@core/context/useContext";
import { div } from "@core/elements/div";
import { span } from "@core/elements/span";
import { a } from "@core/elements/a";
import { button } from "@core/elements/button";
import { AppContext } from "../../context/appContext";
import { IAppModel } from "../../model/IAppModel";

export function homePage(): HTMLElement {
    const ctx: IAppModel = useContext<IAppModel>(AppContext);
    const getLabel = () => `Число книг: ${ctx.books.get().length}`;
    const label: HTMLElement = span().innerHTML(getLabel()).get();
    const link: HTMLAnchorElement = a().title("About").innerHTML("About").href("#/about").get();
    const myButton: HTMLButtonElement = button()
        .innerHTML("Добавить книгу")
        .onClick(() => ctx.books.set([...ctx.books.get(), { title: "Война и мир" }]))
        .get();

    ctx.books.subscribe(() => {
        label.innerHTML = getLabel();
    });

    return div().children([label, link, myButton]).className("page main-page _flex _flex-row _flex-gap_10").get();
}
