import { img } from "@core/elements/img";
import { a } from "@core/elements/a";
import { div } from "@core/elements/div";
import { span } from "@core/elements/span";
import { appModel } from "../../model/appModel";

export function header() {
    const { favorites } = appModel;
    const favCountLabel = span().innerHTML(favorites.get().length.toString()).className("font-bold text-12 line-28").get();

    favorites.subscribe(() => {
        favCountLabel.innerHTML = favorites.get().length.toString();
    });

    return div()
        .children([
            div()
                .children([img().src("/static/logo.svg").get()])
                .get(),
            div()
                .children([
                    a()
                        .children([img().src("/static/search.svg").attribute("alt", "Поиск иконка").get(), span().innerHTML("Поиск книг").get()])
                        .className("flex items-center gap-10 text-14 line-20 decoration-none")
                        .get(),

                    a()
                        .children([
                            img().src("/static/favorites.svg").attribute("alt", "Избранное").get(),
                            span().innerHTML("Избранное").get(),
                            div()
                                .children([favCountLabel])
                                .width("30px")
                                .height("30px")
                                .className("flex items-center justify-center px-10 border rounded")
                                .get(),
                        ])
                        .className("flex items-center gap-10 text-14 line-20 decoration-none")
                        .get(),
                ])
                .className("flex flex-row items-center gap-30")
                .get(),
        ])
        .className("flex flex-row items-center justify-between my-20")
        .get();
}

/*
			<a class="menu__item" href="#favorites">
					<img src="/static/favorites.svg" alt="Избранное иконка" />
					Избранное
					<div class="menu__counter">
						${this.appState.favorites.length}
					</div>
				</a>
*/
