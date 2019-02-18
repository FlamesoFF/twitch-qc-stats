<template>
  <v-content class="content">
    <v-card class="mainCard" height="100%" v-if="!busy">
      <v-toolbar dark>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-text-field
          v-model="search.model"
          @keyup.enter="searchPlayer(search.model)"
          @keyup.escape="disableSearch()"
        ></v-text-field>

        <v-btn icon @click="disableSearch()">
          <v-icon>close</v-icon>
        </v-btn>

        <v-progress-circular indeterminate size="24" v-if="search.progress"></v-progress-circular>
      </v-toolbar>

      <v-container class="statsContainer">
        <div v-if="config && config.streamerName && !search.enabled">
          <h2>Streamer</h2>

          <div class="playerCardContainer streamer">
            <v-card class="playerCard">
              <v-container class="info">
                <div class="avatar">
                  <img
                    :src="`https://stats.quake.com/icons/${streamer.iconId}.png`"
                    v-on:error="setDefaultAvatar($event)"
                  >
                </div>

                <div class="text">
                  <h4>{{streamer.name}}</h4>

                  <div class="elo">
                    <img :src="`https://stats.quake.com/ranks/${getRankIcon(streamer.elo)}`">
                    <div class="value">{{streamer.elo}}</div>
                  </div>
                </div>
              </v-container>

              <img
                :src="`https://stats.quake.com/nameplates/${streamer.namePlateId}.png`"
                v-on:error="setDefaultPlate($event)"
              >
            </v-card>
          </div>
        </div>

        <div v-if="search.value && !search.error">
          <h2>Search result:</h2>

          <div class="playerCardContainer streamer">
            <v-card class="playerCard">
              <v-container class="info">
                <div class="avatar">
                  <img
                    :src="`https://stats.quake.com/icons/${search.value.iconId}.png`"
                    v-on:error="setDefaultAvatar($event)"
                  >
                </div>

                <div class="text">
                  <h4>{{search.value.name}}</h4>

                  <div class="elo">
                    <img :src="`https://stats.quake.com/ranks/${getRankIcon(search.value.elo)}`">
                    <div class="value">{{search.value.elo}}</div>
                  </div>
                </div>
              </v-container>

              <img
                :src="`https://stats.quake.com/nameplates/${search.value.namePlateId}.png`"
                v-on:error="setDefaultPlate($event)"
              >
            </v-card>
          </div>
        </div>

        <div v-if="search.error">
          <h2>Player not found!</h2>
        </div>

        <h2>Stats</h2>

        <template v-for="(player, index) in players">
          <div class="playerCardContainer" v-bind:key="index">
            <h3 class="position">{{index + 1}}</h3>

            <v-card class="playerCard">
              <v-container class="info">
                <div class="avatar">
                  <img
                    :src="`https://stats.quake.com/icons/${player.profileIconId}.png`"
                    v-on:error="setDefaultAvatar($event)"
                  >
                </div>

                <div class="text">
                  <h4>{{player.userName}}</h4>

                  <div class="elo">
                    <img :src="`https://stats.quake.com/ranks/${getRankIcon(player.eloRating)}`">
                    <div class="value">{{player.eloRating}}</div>
                  </div>
                </div>
              </v-container>

              <img
                :src="`https://stats.quake.com/nameplates/${player.namePlateId}.png`"
                v-on:error="setDefaultPlate($event)"
              >
            </v-card>
          </div>
        </template>
      </v-container>
    </v-card>

    <v-card height="100%" class="loader" v-if="busy">
      <v-progress-circular indeterminate></v-progress-circular>
    </v-card>
  </v-content>
</template>

<script lang="ts" src="./Panel.ts"></script>

<style lang="scss" src="./Panel.scss" scoped></style>