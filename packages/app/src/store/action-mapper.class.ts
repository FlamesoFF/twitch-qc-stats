import { ActionsMapObject } from "../types/store/actions-map-object.type";
import { AppAction } from "./app-action.class";
import { SEARCH_ACTION_TYPES } from "./actions/search.actions";

type RawActions<Keys extends string, D extends object | string | number> = { [K in Keys]: D };
type ActionType<ACTION = AppAction<any>> = ACTION extends AppAction<infer T> ? T : ACTION;

export abstract class ActionMapper {
  static map<TYPES extends string, DATA extends any>(actions: AppAction<TYPES, DATA>[]): { [key in TYPES]: AppAction<TYPES, DATA> } {
    const mapped = actions.map(
      ({ type, data }) => [ type, { type, data } ]
    );

    return Object.fromEntries(mapped) as ActionsMapObject<TYPES, DATA>;
  }
}
