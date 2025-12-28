import { createApp } from "./core/app/createApp";
import { homePage } from "./pages/home/homePage";
import "./app.css";

createApp({
    routes: [{ path: "", page: homePage }],
});
