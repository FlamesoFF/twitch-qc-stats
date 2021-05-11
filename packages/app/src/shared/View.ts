import { TwitchConfiguration } from "../types/titch-configuration.interface";
import React from "react";

export class AppView extends React.Component<any, any> {
  protected busy: boolean = false;

  twitchAPI = window.Twitch.ext;
  config = {} as TwitchConfiguration;
}
