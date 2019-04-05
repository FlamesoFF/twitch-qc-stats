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
                @click="$vuetify.goTo('body', options); enable()"
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


<script lang="ts" src="./search.ts"></script>
<style lang="scss" src="./search.scss" scoped></style>