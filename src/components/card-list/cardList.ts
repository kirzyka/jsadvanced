import { div } from "@core/elements/div";
import { Book } from "../../types/Book";
import { card } from "../card/card";

import "./card-list.css";

interface Props {
    books: Book[];
}

export function cardList({ books }: Props) {
    return div()
        .children(books.map((book) => card({ book })))
        .className("card-list")
        .get();
}
