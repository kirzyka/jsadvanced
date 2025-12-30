import { div } from "@core/elements/div";
import { span } from "@core/elements/span";
import { Book } from "../../types/Book";
import { card } from "../card/card";

import "./card-list.css";

interface Props {
    books: Book[];
    isLoading: boolean;
}

export function cardList({ books, isLoading }: Props) {
    if (isLoading)
        return div()
            .children([span().innerHTML("Загрузка...").get()])
            .className("flex items-center justify-center")
            .get();

    return div()
        .children(books.map((book) => card({ book })))
        .className("card-list")
        .get();
}
