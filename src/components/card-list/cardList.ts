import { div } from "@core/elements/div";
import { ISignal } from "@core/interfaces/ISignal";
import { Book } from "../../types/Book";
import { card } from "../card/card";
interface Props {
    books: ISignal<Book[]>;
}

export function cardList({ books }: Props) {
    return div()
        .children([
            div()
                .children(books.get().map((book) => card({ book })))
                .className("flex flex-row flex-wrap justify-center gap-10 w-full")
                .get(),
        ])
        .className("flex flex-grow w-full overflow-y-auto")
        .get();
}
