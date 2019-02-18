import Component from "vue-class-component";
import Vue from "vue";

import { API } from "../../api/api";
import { NQuakeAPI, NApp } from "../../api/api.types";
import { AppView } from "../../shared/View";
import { TwitchConfiguration } from "../../shared/TwitchConfiguration";

const STREAMER_NAME = "flamesoff";

const RANKS = [
  "Bronze_01.png",
  "Bronze_02.png",
  "Bronze_03.png",
  "Bronze_04.png",
  "Bronze_05.png",
  "Silver_01.png",
  "Silver_02.png",
  "Silver_03.png",
  "Silver_04.png",
  "Silver_05.png",
  "Gold_01.png",
  "Gold_02.png",
  "Gold_03.png",
  "Gold_04.png",
  "Gold_05.png",
  "Diamond_01.png",
  "Diamond_02.png",
  "Diamond_03.png",
  "Diamond_04.png",
  "Diamond_05.png",
  "Elite_01.png"
];

@Component({})
export default class App extends AppView {
  message = "Hello!";
  players: NQuakeAPI.ILeaderboardItem[] = [];
  streamer: NApp.IStreamer = {};
  config = new TwitchConfiguration({});
  search = {
    model: undefined,
    value: undefined,
    enabled: false,
    progress: false,
    error: false
  };

  // hooks
  beforeMount() {
    this.preloadData();

    this.twitchAPI.configuration.onChanged(() => {
      if (
        this.twitchAPI.configuration.broadcaster &&
        this.twitchAPI.configuration.broadcaster.content
      ) {
        try {
          this.config = JSON.parse(
            this.twitchAPI.configuration.broadcaster.content
          );

          this.loadStreamerStats();
        } catch (error) {
          console.error("EXTENSION ERROR: Invalid configuration");
        }
      }
    });
  }

  async preloadData() {
    this.enableBusy();

    await this.loadPlayerInfo();

    this.disableBusy();
  }

  async loadPlayerInfo() {
    let leaders = await API.getLeaders();
    leaders.data.entries = leaders.data.entries.slice(0, 10);

    this.players = leaders.data.entries;
  }

  async loadStreamerStats() {
    try {
      let stats = (await API.getUserInfo(this.config.streamerName)).data;

      this.streamer = {
        name: stats.name,
        elo: stats.playerRatings.duel.rating,
        iconId: stats.playerLoadOut.iconId,
        namePlateId: stats.playerLoadOut.namePlateId
      };
    } catch (error) {}
  }

  getRankIcon(rating: number): string {
    const coefficient = rating / 2200;
    const rank = Math.round(RANKS.length * coefficient);

    if (coefficient > 1) {
      return RANKS[RANKS.length - 1];
    } else {
      return RANKS[rank];
    }
  }

  enableSearch() {
    this.search.enabled = true;
  }

  disableSearch() {
    this.search.enabled = false;
    this.search.error = false;
    this.search.model = undefined;
    this.search.value = undefined;
  }

  async searchPlayer(name) {
    this.search.progress = true;

    try {
      const response = await API.getUserInfo(name);

      if (response.data && response.data.name) {
        let stats: NApp.IStreamer = {
          name: response.data.name,
          elo: response.data.playerRatings.duel.rating,
          iconId: response.data.playerLoadOut.iconId,
          namePlateId: response.data.playerLoadOut.namePlateId
        };

        this.search.value = stats;
      }
    } catch (error) {
      this.search.error = true;
    }

    this.search.progress = false;
  }

  private setDefaultAvatar($event) {
    $event.target.src = "https://stats.quake.com/icons/profile_icon_01.png";
  }
  private setDefaultPlate($event) {
    $event.target.src =
      "https://stats.quake.com/nameplates/nameplate_default.png";
  }
}
