import './search.scss';
import { Button, ButtonToolbar, Container, Form, FormText, ProgressBar } from "react-bootstrap";
import { statsApi } from '../../api/api.class';
import store from '../../store/store';
import React from "react";
import { ILeaderboardItem } from '../../types/quake-api/leaderboard-item.interface';
import { BsSearch, ImCross } from "react-icons/all";
import AppPlayerCard from '../player-card/player-card';
import {
  clearSearchResult,
  disableSearch,
  enableSearch,
  saveSearchResult,
  searchError
} from "../../store/reducers/search.reducer";

export default class AppSearch extends React.Component<any, any> {
  state = store.getState();

  model = '';
  progress = false;
  valid = false;
  rules = {
    nickname: (value: string) => {
      return /^[\d|\w|\.| ]*$/.test(value) || 'Invalid format';
    }
  };

  reset() {
    this.stop();
    store.dispatch(clearSearchResult());
  }

  enable() {
    store.dispatch(enableSearch());
  }

  disable() {
    store.dispatch(disableSearch() );
    this.clear();
    this.reset();
  }

  clear() {
    this.model = '';
  }

  submit() {
    // this.$refs.form.validate();
  }

  start() {
    this.progress = true;
  }

  stop() {
    this.progress = false;
  }

  async searchPlayer(name: string) {
    if (!this.valid) return;

    this.reset();
    this.enable();
    this.start();

    try {
      const data = await statsApi.getPlayerStats(name);

      if (data) {
        const stats: ILeaderboardItem = {
          userName: data.name,
          eloRating: data.playerRatings.duel.rating,
          profileIconId: data.playerLoadOut.iconId,
          namePlateId: data.playerLoadOut.namePlateId
        };

        store.dispatch(saveSearchResult(stats));
      }
    } catch (error) {
      store.dispatch(clearSearchResult());
      store.dispatch(searchError());
    }

    this.stop();
  }

  onSearch() {
    // this.element.goTo('body');
    this.enable();
  }


  render() {
    return (
      <Container>
        {/*search container*/}
        <Container className="searchContainer">
          <Form className="caption">

            {
              this.state.search?.enabled === false &&
              <Button className="searchButton"
                onClick={() => this.onSearch()}
              >
                <BsSearch/>
              </Button>
            }

            {
              this.state.search?.enabled === true &&
              <ButtonToolbar>
                <BsSearch/>
                <FormText muted={this.progress}></FormText>

                <Button onClick={this.disable}>
                  <ImCross/>
                </Button>

                {
                  this.progress &&
                  <ProgressBar></ProgressBar>
                }
              </ButtonToolbar>
            }
          </Form>

          <div className="result">
            {
              Boolean(this.state.search?.result) === true &&
              <div>
                <h3>Player search result:</h3>

                {
                  this.state.search?.error === true &&
                  <AppPlayerCard/>
                }

              </div>
            }

            {
              this.state.search?.error &&
              <h3>Player not found</h3>
            }
          </div>
        </Container>
      </Container>
    );
  }
}

