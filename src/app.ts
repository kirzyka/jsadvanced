import { FC } from "@core/types/FC";
import { createApp } from "@core/app/createApp";
import { div } from "@core/elements/div";
import { routes } from "./routes/routes";

import "./styles/app.scss";

const wrapper = (children: FC) => div().children([children()]).className("app").get();

createApp({
    title: "Book App",
    wrapper,
    routes,
});
