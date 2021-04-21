import { Reducer } from "redux";
import { AppAction } from "../../store/app-action.class";

export type ReducerMap< TYPE extends string, STATE = any> = { [key in TYPE]: Reducer<STATE, AppAction<TYPE>> };
