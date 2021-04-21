import { TwitchConfiguration } from "./TwitchConfiguration";
import React from "react";

export class AppView extends React.Component<any, any> {
  protected busy: boolean = false;

  twitchAPI = window.Twitch.ext;
  config: TwitchConfiguration = {};
}
