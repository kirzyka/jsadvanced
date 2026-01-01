import { div } from "@core/elements/div";
import { img } from "@core/elements/img";
import { span } from "@core/elements/span";
import { button } from "@core/elements/button";
import { Book } from "../../types/Book";
import { appModel } from "../../model/appModel";

interface Props {
    book: Book;
}

export function card({ book }: Props) {
    const { favorites } = appModel;
    //const isFavorite: boolean = ctx.favorites.get().includes(book.key);
    const cover: string = book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : "";
    const isFavorite: boolean = favorites.get().some((key: string) => key == book.key);

    return div()
        .children([
            div()
                .children([cover ? img().src(cover).get() : null])
                .height("180px")
                .className("flex items-start justify-center pt-10 layer-secondary")
                .get(),
            div()
                .children([
                    div()
                        .children([
                            span()
                                .innerHTML(book.subject ? book.subject[0] : "Не задано")
                                .get(),
                        ])
                        .className("text-12 line-16 mb-4 font-thin")
                        .get(),
                    div()
                        .children([span().innerHTML(book.title).get()])
                        .className("text-16 line-20 mb-8")
                        .get(),
                    div()
                        .children([
                            span()
                                .innerHTML(book.author_name ? book.author_name[0] : "Не задано")
                                .get(),
                        ])
                        .className("text-12 line-16")
                        .get(),

                    div()
                        .children([
                            button()
                                .children([
                                    img()
                                        .src(isFavorite ? "/static/favorites.svg" : "/static/favorites-white.svg")
                                        .get(),
                                ])
                                .width("36px")
                                .height("32px")
                                .className(`flex items-center justify-center border-secondary rounded-8 bg-none pointer ${isFavorite ? "layer-secondary" : ""}`)
                                .get(),
                        ])
                        .className("flex mt-auto")
                        .get(),
                ])
                .minHeight("150px")
                .className("flex flex-column bg-secondary text-secondary p-10")
                .get(),
        ])
        .className("flex flex-column overflow-hidden rounded-8")
        .get();
}
