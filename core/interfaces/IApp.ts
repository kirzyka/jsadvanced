import { FCWrapper } from "../types/FCWrapper";
import { IRoute } from "./IRoute";

export interface IApp {
    title?: string;
    rootElement?: string;
    wrapper?: FCWrapper;
    routes?: IRoute[];
}
