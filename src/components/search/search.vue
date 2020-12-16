<template>
    <!-- search container -->
    <v-container class="searchContainer">
        <v-btn
            class="searchButton"
            fixed
            small
            dark
            fab
            top
            right
            v-if="!enabled"
            @click="$vuetify.goTo('body'); enable()"
        >
            <v-icon>search</v-icon>
        </v-btn>

        <v-toolbar dark v-if="enabled">

            <v-icon>search</v-icon>

            <v-form v-model="valid"
                    class="caption"
                    ref="form"
                    @submit.prevent="submit()">

                <v-text-field
                    label="Search player..."
                    height="22"
                    v-model="model"
                    :disabled="progress"
                    :rules="[rules.nickname]"
                    @keyup.enter="searchPlayer(model)"
                    @keyup.escape="disable()"
                ></v-text-field>

            </v-form>

            <v-btn icon
                   align="right"
                   @click="disable()">
                <v-icon>close</v-icon>
            </v-btn>

            <v-progress-circular
                indeterminate
                size="24"
                v-if="progress"
            ></v-progress-circular>
        </v-toolbar>

        <div class="result">

            <!-- success -->
            <div v-if="result">
                <h3>Player search result:</h3>

                <app-player-card
                    v-if="!error"
                    :data="result"
                ></app-player-card>
            </div>

            <!-- on error -->
            <h3 v-if="error">Player not found</h3>
        </div>

    </v-container>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import {API} from '../../api/restApi'
import {NQuakeAPI} from '../../api/types'
import store, {MUTATIONS} from '../../store'
import {getRankIcon} from '../../shared/ranks'
import AppPlayerCard from '../player-card/player-card.vue'

@Options({
        name: 'app-search',

        components: {
            'app-player-card': AppPlayerCard
        }
    })
    export default class AppSearch extends Vue {
        model = '';
        progress = false;
        valid = false;
        rules = {
            nickname: value => {
                return /^[\d|\w|\.| ]*$/.test(value) || 'Invalid format'
            }
        };

        get enabled () {
            return store.state.search.enabled
        }

        get result () {
            return store.state.search.result
        }

        get error () {
            return store.state.search.error
        }

        get getRankIcon () {
            return getRankIcon
        }

        beforeCreate () {
        }

        reset () {
            this.stop()
            store.commit(MUTATIONS.resetSearch)
        }

        enable () {
            store.commit(MUTATIONS.enableSearch)
        }

        disable () {
            store.commit(MUTATIONS.disableSearch)
            this.clear()
            this.reset()
        }

        clear () {
            this.model = ''
        }

        submit () {
            // @ts-ignore
            this.$refs.form.validate()
        }

        start () {
            this.progress = true
        }

        stop () {
            this.progress = false
        }

        async searchPlayer (name: string) {
            if (this.valid) {
                this.reset()
                this.enable()
                this.start()

                try {
                    const response = await API.searchPlayer(name)
                    const { data } = response

                    const stats: NQuakeAPI.ILeaderboardItem = {
                        userName: data.name,
                        eloRating: data.playerRatings.duel.rating,
                        profileIconId: data.playerLoadOut.iconId,
                        namePlateId: data.playerLoadOut.namePlateId
                    }

                    store.commit(MUTATIONS.saveSearchResult, stats)
                    this.$nextTick()
                } catch (error) {
                    store.commit(MUTATIONS.clearSearchResult)
                    store.commit(MUTATIONS.searchError)
                }

                this.stop()
            }
        }
    }

</script>
<style lang="scss" src="search.scss" scoped></style>
