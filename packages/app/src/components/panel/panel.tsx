import './panel.scss';
import AppPlayerCard from "../player-card/player-card";
import React from "react";
import store from "../../store/store";
import { twitchAPI } from "../../static/twitch";
import { TwitchConfiguration } from "../../types/titch-configuration.interface";
import { Col, Container, Row } from "react-bootstrap";
import { disableBusy, enableBusy } from "../../store/reducers/busy.reducer";
import { getLeaders, loadStreamerStats } from "src/store/thunks/stats-api.thunks";
import { ILeaderboardItem } from "../../types/quake-api/leaderboard-item.interface";


export default class Panel extends React.Component {
  state = {
    ready: false
  };
  players: ILeaderboardItem[] = [];
  listOffset = 0;
  search = undefined;
  scrollOptions = {
    duration: 100,
    easing: 'easeInOutCubic',
    offset: 200
  };

  async componentDidMount() {
    twitchAPI.configuration.onChanged(async () => {
      const {
        broadcaster: {
          content = null
        } = {}
      } = twitchAPI.configuration as TwitchConfiguration;

      if (content) {
        try {
          await store.dispatch(loadStreamerStats());
        } catch (error) {
          console.error('EXTENSION ERROR: Invalid configuration');
        }
      }
    });

    await this.preloadData();

    this.setState({ready: true});
  }

  render() {
    return (
      <Container className="content p-0">
        <Row>
          <Col className="d-flex justify-content-center">
            <img alt=""
                 src={ `${ process.env.PUBLIC_URL }/assets/images/design/title.png` }/>
          </Col>
        </Row>

        {
          this.state.ready &&
          <Row className="pt-2">
            <Col>
              <AppPlayerCard/>
            </Col>
          </Row>
        }
      </Container>
    );
  }

  private async preloadData() {
    store.dispatch(enableBusy());

    await Promise.all([
      store.dispatch(loadStreamerStats()),
      store.dispatch(getLeaders())
    ]);

    store.dispatch(disableBusy());
  }
}
