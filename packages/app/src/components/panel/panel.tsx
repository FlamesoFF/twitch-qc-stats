import store from "../../store/store";
import { statsApi } from "../../api/api.class";
import { TwitchConfiguration } from "../../shared/TwitchConfiguration";
import { Card, Container, ProgressBar } from "react-bootstrap";
import { ILeaderboardItem } from "../../types/quake-api/leaderboard-item.interface";
import { STREAMER_ACTION_TYPES } from "../../store/actions/streamer.actions";
import React from "react";
import { BUSY_ACTION_TYPES } from "../../store/actions/busy.actions";
import { twitchAPI } from "../../static/twitch";
import { loadStreamerStats } from "../../store/thunks/stats-api.thunks";


export default class Panel extends React.Component {
  players: ILeaderboardItem[] = [];
  listOffset = 0;
  search = undefined;
  connecting = {
    message: 'Connecting to stats.quake.com',
    dots: '.'
  };

  scrollOptions = {
    duration: 100,
    offset: 200,
    easing: 'easeInOutCubic'
  };

  get appState() {
    return store.getState();
  }

  constructor(args: any) {
    super(args);

    twitchAPI.configuration.onChanged(() => {
      const { broadcaster: { content = null } = {} } = twitchAPI.configuration;

      if (content) {
        try {
          this.loadStreamerStats();
        } catch (error) {
          console.error('EXTENSION ERROR: Invalid configuration');
        }
      }
    });
  }

  // HOOKS
  async componentDidMount() {
    await this.preloadData();
  }

  // LOGIC
  async preloadData() {
    store.dispatch({ type: BUSY_ACTION_TYPES.enableBusy });

    await this.loadStreamerStats();
    await this.getLeaders();
    await this.loadPlayersStats();

    store.dispatch({ type: BUSY_ACTION_TYPES.disableBusy });
  }

  async loadPlayersStats() {
    const leaders = await statsApi.getLeaders();

    if (leaders.entries) {
      leaders.entries = leaders.entries.slice(0, 10);

      this.players = leaders.entries;
    }
  }

  async loadStreamerStats() {
    const { broadcaster: { content = null } = {} } = twitchAPI.configuration;
    const { name } = JSON.parse(content);
    const stats = await statsApi.getPlayerStats(name);

    store.dispatch({
      type: STREAMER_ACTION_TYPES.setStreamer,
      data: stats
    });
  }

  async getLeaders() {
    const data = await statsApi.getLeaders();

    if (data) {
      this.players = data.entries.slice(0, 10);

      return true;
    }
  }

  render() {
    return (
      <Container className={'content'}>
        <img src="../../../../../assets/images/design/title.png"/>

        <Card style={{ height: "100%" }}
          className={'loader'}
          v-if="busy">

          <h3>{this.connecting.message}</h3>

          <ProgressBar now={60}/>

        </Card>

        <Card className={'mainCard'}
          v-if="!busy">

          {/*<app-player-details name="'flamesoff'"></app-player-details>*/}

          {/*<AppSearch/>*/}

          <Container className={'statsContainer'}>

            <div v-if="config && config.streamerName && !searchEnabled && streamer">
              <h3>Streamer</h3>

              {/*<app-player-card v-if="streamer"
              data="streamer"            > </app-player-card>*/}

              {/*<app-player-details name="streamer.userName"></app-player-details>*/}

            </div>

            <h3>Top 10</h3>


            {/*<app-player-card v-for="(player, index) in players"
                             data="player"
                             position="listOffset + index + 1"
                             v-bind:key="index"></app-player-card>*/}


          </Container>

        </Card>

      </Container>
    );
  }
}
