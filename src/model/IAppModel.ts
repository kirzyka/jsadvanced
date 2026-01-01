import { ISignal } from "../../core/interfaces/ISignal";

export interface IAppModel {
    favorites: ISignal<string[]>;
}
