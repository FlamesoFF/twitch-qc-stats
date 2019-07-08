import Vue from "vue";
import Component from "vue-class-component";
import {NQuakeAPI} from "../../../api/types";
import {API} from "../../../api/restApi";

class WeaponsAccuracy implements NQuakeAPI.IGamesSummaryWeaponAccuracy {
    GAUNTLET: number = 0;
    LAGBOLT: number = 0;
    LIGHTNING_GUN: number = 0;
    MACHINEGUN: number = 0;
    MACHINEGUN_GRADE1: number = 0;
    NAILGUN: number = 0;
    NAILGUN_GRADE1: number = 0;
    RAILGUN: number = 0;
    ROCKET_LAUNCHER: number = 0;
    SHOTGUN: number = 0;
    SHOTGUN_GRADE1: number = 0;

    constructor(accuracy?: NQuakeAPI.IGamesSummaryWeaponAccuracy) {
        if (accuracy) {
            Object.assign(this, accuracy);
        }
    }
}

@Component({
    name: 'app-player-details',

    props: {
        name: String
    }
})
export default class AppPlayerDetails extends Vue {
    name: string;
    headers = [
        {
            text: 'Gauntlet',
            value: 'name'
        },
        {text: 'Tribolt', value: 'tribolt'},
        {text: 'Fat (g)', value: 'fat'},
        {text: 'Carbs (g)', value: 'carbs'},
        {text: 'Protein (g)', value: 'protein'},
        {text: 'Iron (%)', value: 'iron'}
    ];
    accuracy: WeaponsAccuracy;
    private stats: NQuakeAPI.IGamesSummary;

    constructor(props) {
        super(props);
    }

    created() {
        this.loadGamesStats()
            .then(result => {
                this.accuracy = this.calculateAccuracy();
            })
            .catch(error => {

            });
    }

    async loadGamesStats() {
        const gamesSummary = await API.getGamesSummary(this.name);

        this.stats = gamesSummary;
    }

    calculateAccuracy() {
        const {matches} = this.stats;
        const accuracy = new WeaponsAccuracy();

        // summ accuracies
        matches.forEach((match: NQuakeAPI.IGamesSummaryMatchesItem) => {
            const {weaponAccuracy} = match;

            Object.keys(weaponAccuracy).forEach(key => {
                accuracy[key] += weaponAccuracy[key];
            });
        });

        // round to precision and return number
        function toFixed(number, precision) {
            return Number(Number(number).toFixed(precision));
        }

        // calc arithmetical mean
        Object.keys(accuracy).forEach(key => {
            accuracy[key] = toFixed(accuracy[key] / matches.length, 1)
        });

        return accuracy;
    }

}