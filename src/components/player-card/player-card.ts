import {index} from '../../store';
import Vue from "vue";
import Component from "vue-class-component";
import {NQuakeAPI} from "../../api/types";

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

    get store(){
        return index;
    }

    openLink(name: string) {
        window.open(`https://stats.quake.com/profile/${name}`);
    }
}
