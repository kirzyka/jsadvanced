import { FC } from "@core/types/FC";
import { createApp } from "@core/app/createApp";
import { withProvider } from "@core/context/withProvider";
import { appContext } from "./context/appContext";
import { appModel } from "./model/appModel";
import { routes } from "./routes/routes";

import "./styles/_.scss";
import "./styles/app.css";

const wrapper = (children: FC) => withProvider(appContext, appModel, children);

createApp({
    title: "Book App",
    wrapper,
    routes,
});
