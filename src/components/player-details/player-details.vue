<template>
    <div class="playerDetails">

        <div class="info">

            <div class="row">

                <div class="avatar">
                    <img
                            :src="`./assets/images/${profileIconId}.png`"
                            @error="setDefaultAvatar($event)"
                    >
                </div>

                <span
                        class="name"
                        @click="openLink(userName)">userName</span>

                <div class="elo">

                    <div class="duel">
                        <img :src="`./assets/images/${getRankIcon(duelRating)}`">
                        <div class="value">{{duelRating}}</div>
                    </div>

                    <div class="tdm">
                        <img :src="`./assets/images/${getRankIcon(tdmRating)}`">
                        <div class="value">{{tdmRating}}</div>
                    </div>

                </div>

            </div>

        </div>

        <div class="graph">

            <v-tabs>
                <v-tab>WEAPONS</v-tab>
                <v-tab>DUEL</v-tab>
                <v-tab>TEAM</v-tab>
                <v-tab>STAT</v-tab>

                <v-tab-item>
                    <canvas
                            id="accuracyChart"
                            width="300"
                            height="245"
                    ></canvas>
                </v-tab-item>

                <v-tab-item>
                    <canvas
                            id="duelChart"
                            width="300"
                            height="245"
                    ></canvas>
                </v-tab-item>

                <v-tab-item>
                    <canvas
                            id="tdmChart"
                            width="300"
                            height="245"
                    ></canvas>
                </v-tab-item>

                <v-tab-item>
                    <canvas
                            id="generalChart"
                            width="300"
                            height="245"
                    ></canvas>
                </v-tab-item>

            </v-tabs>

        </div>

    </div>
</template>

<script lang="ts" src="player-details.ts"></script>
<style lang="scss" src="player-details.scss" scoped></style>



