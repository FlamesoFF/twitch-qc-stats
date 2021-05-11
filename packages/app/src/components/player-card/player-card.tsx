import './player-card.scss';
import React from 'react';
import moment from "moment";
import { Col, Container, Row } from "react-bootstrap";
import { DEFAULT_AVATAR, DEFAULT_PLATE, OFFICIAL_STATS_URL } from "../../constants";
import { selectActiveUserStats } from "../../store/selectors/streamer.selectors";
import { PlayerStats } from "../../types/quake-api/player-stats.interface";
import { GameMode } from "../../types/quake-api/game-mode.interface";
import { Champion } from "../../types/quake-api/champion.interface";


export default class AppPlayerCard extends React.Component {
  state = {
    avatar: DEFAULT_AVATAR,
    plate: DEFAULT_PLATE,
  }

  get activePlayer(): PlayerStats {
    return selectActiveUserStats();
  }

  get playerTotalMatches() {
    return this.activePlayer.playerRatings.duel.gamesCount
      + this.activePlayer.playerRatings.tdm.gamesCount;
  }

  get totalTimePlayed(): string {
    let time = 0;

    for (let champion of Object.values<Champion>(this.activePlayer.playerProfileStats.champions)) {
      for (let gm of Object.values<GameMode>(champion.gameModes)) {
        time += gm.timePlayed;
      }
    }

    return moment.duration(time, 'milliseconds').asHours().toFixed(0);
  }

  openLink() {
    if (this.activePlayer.name) {
      window.open(`${ OFFICIAL_STATS_URL }/profile/${ this.activePlayer.name }`);
    }
  }

  render() {
    return (
      <Container className="player-card p-1">
        <div className="plate d-flex"
             style={ {backgroundImage: `url(${ this.state.plate }), url(${ DEFAULT_PLATE })`} }>
        </div>
        <div className="avatar"
             style={ {backgroundImage: `url(${ this.state.avatar }), url(${ DEFAULT_AVATAR })`} }/>

        <Row className="text-info">
          <Col>
            <Row className="name">
              <Col className="p-1" onClick={ () => this.openLink() }>
                { this.activePlayer.name }
              </Col>
            </Row>

            <Row className="details">
              <Col className="col-3 p-1">
                <span>{ this.activePlayer.playerLevelState.level } lvl.</span>
              </Col>

              <Col className="col-5 p-1">
                <span>{ this.playerTotalMatches } matches</span>
              </Col>

              <Col className="col-4 p-1">
                <span>{ this.totalTimePlayed } hrs.</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
