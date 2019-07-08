<template>
    <div class="playerDetails">

        <v-data-table
                :headers="headers"
                :items="accuracy"
                class="elevation-1"
        >
            <template v-slot:items="accuracy">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ accuracy.item.GAUNTLET }}</td>
            </template>
        </v-data-table>

    </div>
</template>

<script lang="ts" src="./player-card.ts"></script>
<style lang="scss" src="./player-card.scss" scoped></style>



