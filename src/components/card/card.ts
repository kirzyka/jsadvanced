import { useContext } from "@core/context/useContext";
import { div } from "@core/elements/div";
import { img } from "@core/elements/img";
import { appContext } from "../../context/appContext";
import { IAppModel } from "../../model/IAppModel";
import { Book } from "../../types/Book";

import "./card.css";

interface Props {
    book: Book;
}

export function card({ book }: Props) {
    //const ctx: IAppModel = useContext<IAppModel>(appContext);
    //const isFavorite: boolean = ctx.favorites.get().includes(book.key);
    const cover: string = book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : "";

    return div()
        .children([
            div()
                .children([cover ? img().src(cover).get() : null])
                .className("card-image")
                .get(),
        ])
        .className("card")
        .get();
}
