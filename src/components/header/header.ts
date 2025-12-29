import { img } from "@core/elements/img";
import { a } from "@core/elements/a";
import { div } from "../../../core/elements/div";
import { span } from "../../../core/elements/span";

import "./header.css";
import { useContext } from "@core/context/useContext";
import { IAppModel } from "src/model/IAppModel";
import { appContext } from "src/context/appContext";

export function header() {
    const ctx = useContext<IAppModel>(appContext);
    const favCountLabel = span().innerHTML(ctx.favorites.get().length.toString()).get();

    ctx.favorites.subscribe(() => {
        favCountLabel.innerHTML = ctx.favorites.get().length.toString();
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
                        .className("menu-item")
                        .get(),

                    a()
                        .children([
                            img().src("/static/favorites.svg").attribute("alt", "Избранное").get(),
                            span().innerHTML("Избранное").get(),
                            div().children([favCountLabel]).className("fav-counter").get(),
                        ])
                        .className("menu-item")
                        .get(),
                ])
                .className("menu")
                .get(),
        ])
        .className("header")
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
