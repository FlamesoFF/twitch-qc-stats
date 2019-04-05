<template>
    <v-content class="content">
        <v-card height="100%"
                class="loader"
                v-if="busy">

            <h3>{{connecting.message}}</h3>
            <v-progress-circular indeterminate color="primary"></v-progress-circular>

        </v-card>


        <v-card class="mainCard"
                height="100%"
                v-if="!busy">

            <app-search></app-search>

            <v-container class="statsContainer">

                <div v-if="config && config.streamerName && !searchEnabled && streamer">

                    <h3>Streamer</h3>

                    <app-player-card
                            v-if="streamer"
                            :data="streamer">
                    </app-player-card>

                </div>

                <h3>Top 10</h3>

                <template v-for="(player, index) in players">

                    <app-player-card
                            v-bind:key="index"
                            :position="listOffset + index + 1"
                            :data="player"
                    ></app-player-card>

                </template>
            </v-container>
        </v-card>
    </v-content>
</template>


<script lang="ts" src="./panel.ts"></script>
<style lang="scss" src="./panel.scss"></style>