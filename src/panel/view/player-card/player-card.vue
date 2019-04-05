<template>
    <div class="playerCardContainer">

        <h3 class="position">{{position}}</h3>

        <v-card class="playerCard">

            <v-container class="info">
                <div class="avatar">
                    <img
                            :src="`./assets/images/${data.profileIconId}.png`"
                            @error="setDefaultAvatar($event)"
                    >
                </div>

                <div class="text">
                    <h4>{{data.userName}}</h4>

                    <div class="elo">
                        <img :src="`./assets/images/${getRankIcon(data.eloRating)}`">
                        <div class="value">{{data.eloRating}}</div>
                    </div>
                </div>
            </v-container>

            <img
                    :src="`./assets/images/${data.namePlateId}.png`"
                    @error="setDefaultPlate($event)"
            >
        </v-card>
    </div>
</template>

<script lang="ts" src="./player-card.ts"></script>
<style lang="scss" src="./player-card.scss" scoped></style>



