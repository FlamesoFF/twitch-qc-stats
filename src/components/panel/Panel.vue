<script lang="ts">
import './panel.scss'
import {API} from '../../api/restApi'
import {NQuakeAPI} from '@/api/types'
import {AppView} from '@/shared/View'
import {TwitchConfiguration} from '@/shared/TwitchConfiguration'
import store, {MUTATIONS} from '../../store/index'

export default class Panel extends AppView {
        players: NQuakeAPI.ILeaderboardItem[] = [];
        listOffset = 0;
        config = new TwitchConfiguration();
        search = undefined;
        connecting = {
            message: 'Connecting to stats.quake.com',
            dots: '.'
        };

        scrollOptions = {
            duration: 100,
            offset: 200,
            easing: 'easeInOutCubic'
        };

        get searchEnabled () {
            return store.state.search.enabled
        }

        get streamer (): NQuakeAPI.ILeaderboardItem {
            return store.state.streamer
        }

        // hooks
        created () {
            this.twitchAPI.configuration.onChanged(() => {
                if (
                    this.twitchAPI.configuration.broadcaster &&
                    this.twitchAPI.configuration.broadcaster.content
                ) {
                    try {
                        this.config = JSON.parse(
                            this.twitchAPI.configuration.broadcaster.content
                        )

                        this.loadStreamerStats().then((streamer) => {
                            store.dispatch(MUTATIONS.setStreamer, streamer)
                        })
                    } catch (error) {
                        console.error('EXTENSION ERROR: Invalid configuration')
                    }
                }
            })
        }

        mounted () {
            this.preloadData()
        }

        async preloadData () {
            this.enableBusy()

            const load = async (): Promise<any> => {
                try {
                    const result = await this.getLeaders()

                    return true
                } catch (error) {
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve()
                        }, 5000)
                    })

                    return await load()
                }
            }

            await load()

            // await this.loadStreamerStats();
            // await this.getLeaders();
            // await this.loadPlayerInfo();

            this.disableBusy()

            return true
        }

        async loadPlayerInfo () {
            const leaders = await API.getLeaders()

            if (leaders.data?.entries) {
                leaders.data.entries = leaders.data.entries.slice(0, 10)

                this.players = leaders.data.entries
            }
        }

        async loadStreamerStats () {
            try {
                const { streamerName } = this.config

                if (streamerName) {
                    const { data } = await API.getPlayerStats(streamerName)

                    if (data) {
                        const streamer: NQuakeAPI.ILeaderboardItem = {
                            userName: data.name,
                            eloRating: data.playerRatings.duel.rating,
                            profileIconId: data.playerLoadOut.iconId,
                            namePlateId: data.playerLoadOut.namePlateId
                        }

                        return streamer
                    }
                }
            } catch (error) {
            }
        }

        async getLeaders () {
            const { data } = await API.getLeaders()

            if (data) {
                this.players = data.entries.slice(0, 10)

                return true
            }
        }
    }
</script>

<template lang="html">
    <v-content class="content">

        <img src="../../../images/title.png"/>

        <v-card
            height="100%"
            class="loader"
            v-if="busy"
        >

            <h3>{{ connecting.message }}</h3>

            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>

        </v-card>

        <v-card
            class="mainCard"
            v-if="!busy"
        >
            <app-player-details :name="'flamesoff'"></app-player-details>

            <AppSearch/>

            <v-container class="statsContainer">

                <div v-if="config && config.streamerName && !searchEnabled && streamer">
                    <h3>Streamer</h3>

                    <!-- <app-player-card
                      v-if="streamer"
                      :data="streamer"
                    > </app-player-card> -->

                    <app-player-details :name="streamer.userName"></app-player-details>

                </div>

                <h3>Top 10</h3>

                <template>

                    <app-player-card
                        v-for="(player, index) in players"
                        :data="player"
                        :position="listOffset + index + 1"
                        v-bind:key="index"
                    ></app-player-card>

                </template>

            </v-container>

        </v-card>

    </v-content>

</template>

<style lang="scss" src="./panel.scss"/>
