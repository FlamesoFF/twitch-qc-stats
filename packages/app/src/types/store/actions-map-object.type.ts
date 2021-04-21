import { AppAction } from "../../store/app-action.class";

export type ActionsMapObject<TYPES extends string, DATA extends any> = {
    [K in TYPES]: AppAction<TYPES, DATA>;
}
