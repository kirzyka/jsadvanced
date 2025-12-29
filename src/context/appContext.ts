import { createContext } from "@core/context/createContext";
import { IAppModel } from "../model/IAppModel";

export const appContext = createContext<IAppModel>();
