import { createApp } from "@core/app/createApp";
import { routes } from "./routes/routes";
import { appWrapper } from "./components/appWrapper/appWrapper";

import "./styles/app.scss";

createApp({
    title: "Book App",
    wrapper: appWrapper,
    routes,
});
