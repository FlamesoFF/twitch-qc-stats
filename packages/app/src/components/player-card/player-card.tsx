import React from 'react';
import { Card, Container } from "react-bootstrap";
import store from "../../store/store";
import { ILeaderboardItem } from '../../types/quake-api/leaderboard-item.interface';
import { defaults } from "../../static/defaults";
import { getRankIcon } from "../../utils/rank.utils";

interface Props {
  position: number
  data?: ILeaderboardItem,
}

export default class AppPlayerCard extends React.Component<Props> {
  state = store.getState();

  private domRefs = {
    avatarImage: React.createRef<HTMLImageElement>(),
    plateImage: React.createRef<HTMLImageElement>()
  };

  openLink(name: string) {
    window.open(`https://stats.quake.com/profile/${name}`);
  }

  private setDefaultAvatar() {
    const { current: el } = this.domRefs.avatarImage;

    if (el) el.src = defaults.avatar;
  }

  private setDefaultPlate() {
    const { current: el } = this.domRefs.plateImage;

    if (el) el.src = defaults.plate;
  }

  render() {
    return (
      <Container>
        <div className="playerCardContainer">
          <h3 className="position">{this.props.position}</h3>

          <Card className="playerCard">
            <Container className="info">
              <div className='avatar'>
                <img ref={this.domRefs.avatarImage}
                  src={`./assets/images/${this.props.data?.profileIconId}.png`}
                  onError={this.setDefaultAvatar}/>
              </div>

              <div className="text">
                <span onClick={() => this.props.data?.userName ? this.openLink(this.props.data?.userName) : null}>
                  {this.props.data?.userName}
                </span>


                <div className={"elo"}>
                  <img src={this.props.data?.eloRating ? `./assets/images/${getRankIcon(this.props.data?.eloRating)}` : ''}/>
                  <div className="value">{this.props.data?.eloRating}</div>
                </div>

              </div>
            </Container>

            <img ref={this.domRefs.plateImage}
              src={`./assets/images/${this.props.data?.namePlateId}.png`}
              onError={this.setDefaultPlate}/>
          </Card>
        </div>
      </Container>
    );
  }
}
