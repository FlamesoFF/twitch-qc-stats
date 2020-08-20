import {Chart} from 'chart.js';
import {getChartDefaults, getDefaultOptions} from '../../shared/chart';
import Vue from "vue";
import Component from "vue-class-component";
import {API} from "../../api/restApi";
import {IRestWorkerResponse, NQuakeAPI} from "../../api/types";
import {getRankIcon} from '../../shared/ranks';
import {iCharts} from "./types";


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

function getRandArr(len: number) {
    function* getStat() {
        yield Math.round(Math.random() * 100);
    }

    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(getStat().next().value);
    }

    return arr;
}


@Component({
    name: 'app-player-details',

    props: {
        name: String
    }
})
export default class AppPlayerDetails extends Vue {
    private stats: IRestWorkerResponse<NQuakeAPI.IGamesSummary>;
    private charts: iCharts = {};

    readonly name: string;
    position = 0;
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
    profileIconId = '';
    namePlateId = '';
    duelRating = 0;
    tdmRating = 0;

    get getRankIcon() {
        return getRankIcon;
    }


    constructor(props) {
        super(props);
    }

    created() {
        this.loadPlayerStats()
            .then(result => {
                this.accuracy = this.calculateAccuracy();
            })
            .catch(error => {

            });

    }

    mounted() {
        let context = (this.$el.querySelector('#accuracyChart') as HTMLCanvasElement).getContext('2d');

        this.charts.accuracy = new Chart(context, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                datasets: [

                    {
                        label: 'MG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 255, 0, 1)',
                        backgroundColor: 'rgba(255, 255, 0, 1)'
                    },

                    {
                        label: 'HMG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 255, 0, 1)',
                        backgroundColor: 'rgba(255, 255, 0, 1)'
                    },

                    {
                        label: 'SG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 128, 0, 1)',
                        backgroundColor: 'rgba(255, 128, 0, 1)'
                    },

                    {
                        label: 'SSG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 128, 0, 1)',
                        backgroundColor: 'rgba(255, 128, 0, 1)'
                    },

                    {
                        label: 'NG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 64, 255, 1)',
                        backgroundColor: 'rgba(0, 64, 255, 1)'
                    },

                    {
                        label: 'SNG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 0, 255, 1)',
                        backgroundColor: 'rgba(0, 0, 255, 1)'
                    },

                    {
                        label: 'TB',
                        data: getRandArr(10),
                        borderColor: 'rgba(200, 180, 0, 1)',
                        backgroundColor: 'rgba(200, 180, 0, 1)'
                    },

                    {
                        label: 'LG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 128, 255, 1)',
                        backgroundColor: 'rgba(0, 128, 255, 1)'
                    },

                    {
                        label: 'RL',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 0, 0, 1)',
                        backgroundColor: 'rgba(255, 0, 0, 1)'
                    },

                    {
                        label: 'RG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 255, 0, 1)',
                        backgroundColor: 'rgba(0, 255, 0, 1)'
                    }

                ].map(item => Object.assign(getChartDefaults(), item))
            },
            options: Object.assign(getDefaultOptions(), {})
        });


        context = (this.$el.querySelector('#duelChart') as HTMLCanvasElement).getContext('2d');

        this.charts.duel = new Chart(context, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                datasets: [

                    {
                        label: 'MG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 255, 0, 1)',
                        backgroundColor: 'rgba(255, 255, 0, 1)'
                    },

                    {
                        label: 'HMG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 255, 0, 1)',
                        backgroundColor: 'rgba(255, 255, 0, 1)'
                    },

                    {
                        label: 'SG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 128, 0, 1)',
                        backgroundColor: 'rgba(255, 128, 0, 1)'
                    },

                    {
                        label: 'SSG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 128, 0, 1)',
                        backgroundColor: 'rgba(255, 128, 0, 1)'
                    },

                    {
                        label: 'NG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 64, 255, 1)',
                        backgroundColor: 'rgba(0, 64, 255, 1)'
                    },

                    {
                        label: 'SNG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 0, 255, 1)',
                        backgroundColor: 'rgba(0, 0, 255, 1)'
                    },

                    {
                        label: 'TB',
                        data: getRandArr(10),
                        borderColor: 'rgba(200, 180, 0, 1)',
                        backgroundColor: 'rgba(200, 180, 0, 1)'
                    },

                    {
                        label: 'LG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 128, 255, 1)',
                        backgroundColor: 'rgba(0, 128, 255, 1)'
                    },

                    {
                        label: 'RL',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 0, 0, 1)',
                        backgroundColor: 'rgba(255, 0, 0, 1)'
                    },

                    {
                        label: 'RG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 255, 0, 1)',
                        backgroundColor: 'rgba(0, 255, 0, 1)'
                    }

                ].map(item => Object.assign(getChartDefaults(), item))
            },
            options: Object.assign(getDefaultOptions(), {})
        });


        context = (this.$el.querySelector('#tdmChart') as HTMLCanvasElement).getContext('2d');

        this.charts.tdm = new Chart(context, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                datasets: [

                    {
                        label: 'MG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 255, 0, 1)',
                        backgroundColor: 'rgba(255, 255, 0, 1)'
                    },

                    {
                        label: 'HMG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 255, 0, 1)',
                        backgroundColor: 'rgba(255, 255, 0, 1)'
                    },

                    {
                        label: 'SG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 128, 0, 1)',
                        backgroundColor: 'rgba(255, 128, 0, 1)'
                    },

                    {
                        label: 'SSG',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 128, 0, 1)',
                        backgroundColor: 'rgba(255, 128, 0, 1)'
                    },

                    {
                        label: 'NG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 64, 255, 1)',
                        backgroundColor: 'rgba(0, 64, 255, 1)'
                    },

                    {
                        label: 'SNG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 0, 255, 1)',
                        backgroundColor: 'rgba(0, 0, 255, 1)'
                    },

                    {
                        label: 'TB',
                        data: getRandArr(10),
                        borderColor: 'rgba(200, 180, 0, 1)',
                        backgroundColor: 'rgba(200, 180, 0, 1)'
                    },

                    {
                        label: 'LG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 128, 255, 1)',
                        backgroundColor: 'rgba(0, 128, 255, 1)'
                    },

                    {
                        label: 'RL',
                        data: getRandArr(10),
                        borderColor: 'rgba(255, 0, 0, 1)',
                        backgroundColor: 'rgba(255, 0, 0, 1)'
                    },

                    {
                        label: 'RG',
                        data: getRandArr(10),
                        borderColor: 'rgba(0, 255, 0, 1)',
                        backgroundColor: 'rgba(0, 255, 0, 1)'
                    }

                ].map(item => Object.assign(getChartDefaults(), item))
            },
            options: Object.assign(getDefaultOptions(), {})
        });


        context = (this.$el.querySelector('#generalChart') as HTMLCanvasElement).getContext('2d');

        this.charts.general = new Chart(context, {
            type: 'radar',
            data: {
                labels: ['accuracy', 'stability', 'KDR'],
                datasets: [

                    {
                        label: '',
                        data: getRandArr(3),
                        borderJoinStyle: 'miter',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        fill: true
                    }

                ].map(item => Object.assign(getChartDefaults(), item))
            },
            options: {
                scale: {
                    gridLines: {
                        color: "rgba(255,255,255,0.1)"
                    },
                    angleLines: {
                        color: "rgba(255,255,255,0.1)"
                    }
                }
            }
        });
    }

    async loadPlayerStats() {
        const gamesSummary = await API.getGamesSummary(this.name);
        const playerStats = await API.getPlayerStats(this.name);

        const {
            data: {
                name,
                playerLoadOut: {
                    iconId,
                    namePlateId
                },
                playerRatings: {
                    duel: {rating: duelRating},
                    tdm: {rating: tdmRating}
                }
            }
        } = playerStats;

        this.profileIconId = iconId;
        this.namePlateId = namePlateId;
        this.duelRating = duelRating;
        this.tdmRating = tdmRating;

        // this.data = playerStats.data;

        // background - image: url(./assets/images / ${ data.profileIconId }.png);

        this.stats = gamesSummary;
    }

    calculateAccuracy() {
        const {matches} = this.stats.data;
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