import { FC } from "@core/types/FC";
import { createApp } from "@core/app/createApp";
import { withProvider } from "@core/context/withProvider";
import { AppContext } from "./context/appContext";
import { appModel } from "./model/appModel";
import { routes } from "./routes/routes";

import "./styles/_.css";
import "./styles/app.css";

const wrapper = (children: FC) => withProvider(AppContext, appModel, children);

createApp({
    title: "Book App",
    wrapper,
    routes,
});
