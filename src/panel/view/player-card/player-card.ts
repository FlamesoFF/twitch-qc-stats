import Vue from "vue";
import Component from "vue-class-component";
import {getRankIcon} from "../../../shared/ranks";
import {NQuakeAPI} from "../../../api/types";

@Component({
    name: 'app-player-card',

    props: {
        data: Object,
        position: Number
    }
})
export default class AppPlayerCard extends Vue {
    data: NQuakeAPI.ILeaderboardItem;
    position: number;

    constructor(props) {
        super(props);
    }


    get getRankIcon() {
        return getRankIcon;
    }


    setDefaultAvatar($event) {
        $event.target.src = "./assets/images/profile_icon_01.png";
    }

    setDefaultPlate($event) {
        $event.target.src =
            "./assets/images/nameplate_default.png";
    }
}