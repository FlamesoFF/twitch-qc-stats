<template>
    <div class="playerCardContainer">

        <h3 class="position">{{position}}</h3>

        <v-card class="playerCard">

            <v-container class="info">
                <div class="avatar">
                    <img :src="`./assets/images/${data.profileIconId}.png`"
                         @error="store.getters.getDefaultAvatar($event)">
                </div>

                <div class="text">
                    <span @click="openLink(data.userName)">{{data.userName}}</span>

                    <div class="elo">
                        <img :src=`./assets/images/${store.getters.getRankIcon(data.eloRating)}`>
                        <div class="value">{{data.eloRating}}</div>
                    </div>
                </div>
            </v-container>

            <img :src="`./assets/images/${data.namePlateId}.png`"
                 @error="store.getters.setDefaultPlate($event)">
        </v-card>
    </div>
</template>

<style lang="scss" src="player-card.scss" scoped></style>
<script lang="ts" src="player-card.ts"></script>




