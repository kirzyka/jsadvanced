import { div } from "@core/elements/div";
import { img } from "@core/elements/img";
import { span } from "@core/elements/span";
import { button } from "@core/elements/button";
import { bindComponent } from "@core/utils/component/bindComponent";
import { Book } from "../../types/Book";
import { appModel } from "../../model/appModel";

interface Props {
    book: Book;
}

export function card({ book }: Props) {
    const { favorites } = appModel;
    const cover: string = book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : "";
    const favBtn: HTMLElement = bindComponent([favorites], () => {
        const isFavorite: boolean = favorites.get().some((fav: Book) => fav.key == book.key);
        const addToFavorites = () => favorites.set([...favorites.get(), book]);
        const removeFromFavorites = () => favorites.set(favorites.get().filter((fav: Book) => fav.key != book.key));

        return button()
            .children([
                img()
                    .src(isFavorite ? "/static/favorites.svg" : "/static/favorites-white.svg")
                    .get(),
            ])
            .width("36px")
            .height("32px")
            .className(`flex items-center justify-center border-secondary rounded-8 bg-none pointer ${isFavorite ? "layer-secondary" : ""}`)
            .onClick(isFavorite ? removeFromFavorites : addToFavorites)
            .get();
    });

    return div()
        .children([
            div()
                .children([
                    cover
                        ? img()
                              .src(cover)
                              .attribute("loading", "lazy")
                              .attribute("decoding", "async")
                              .attribute("fetchpriority", "low")
                              .attribute("alt", book.title)
                              .get()
                        : null,
                ])
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

                    div().children([favBtn]).className("flex mt-auto").get(),
                ])
                .minHeight("150px")
                .className("flex flex-column bg-secondary text-secondary p-10")
                .get(),
        ])
        .width("300px")
        .height("330px")
        .className("flex flex-column overflow-hidden rounded-8")
        .get();
}
