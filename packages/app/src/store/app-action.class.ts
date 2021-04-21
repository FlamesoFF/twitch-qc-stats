import { Action } from "redux";

export class AppAction<TYPE extends string, DATA extends any = any> implements Action<TYPE> {
  type!: TYPE;
  data?: DATA;
}
