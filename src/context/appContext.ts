import { createContext } from "@core/context/createContext";
import { IAppModel } from "../model/IAppModel";

export const AppContext = createContext<IAppModel>();
